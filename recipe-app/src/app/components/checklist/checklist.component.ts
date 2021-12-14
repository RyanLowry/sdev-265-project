import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Checklist } from 'src/app/models/checklist';
import { ChecklistItem } from 'src/app/models/checklist-item';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  measurementItem: string = '';
  ingredientsItem: string = '';
  checklistItems: ChecklistItem[] = [];
  checklistId: string = '';
  routeState: any;

  constructor(private _router: Router, private server: ServerService, public toastr: ToastrService) {
    // need to store checklist id here because if user refreshes then the front end would forget it.
    if (this._router) {
      if (this._router.getCurrentNavigation()?.extras.state) {
        this.routeState = this._router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
          this.checklistId = this.routeState.checklistId;
          localStorage.setItem("currentChecklist", this.checklistId as string);

        }
      }
    }
    if (localStorage.getItem("currentChecklist")) {
      this.checklistId = localStorage.getItem("currentChecklist") || '';
    }
    this.server.getChecklistItems({
      checklistId: this.checklistId
    }).then((e: any) => {
      console.log(this.checklistId)
      if (e.body.status === 'ok') {
        for (let step of e.body.checklistItems) {
          console.log(step)
          this.checklistItems?.push(new ChecklistItem(step.checklistItem_id, step.checklist_id, step.ingredient,step.measurement,step.is_complete))
        }
      } else {

      }
    });
  }

  ngOnInit(): void {

  }

// removes a checklist item
  removeItem(checklistItem:ChecklistItem){
    this.server.removeChecklistItems({
      id:checklistItem.id
    }).then((e: any) => {
      if (e.body.status === 'ok') {
        this.checklistItems.splice(this.checklistItems.indexOf(checklistItem),1);
        this.toastr.success('item removed')

      } else {
        this.toastr.error('something went wrong')

      }
    });
  }
  
  returnToUser() {
    this._router.navigateByUrl('/user')
  }

  // when a checkbox is checked, need to send to server to update info, kind of inefficient, could do all at once but would then risk loss of data.
  onCheck(event: MatCheckboxChange, checklistItem: ChecklistItem) {
    console.log(checklistItem)
    if (this.checklistId) {
      this.server.updateChecklistItems({
        checklistItem: checklistItem.id,
        isComplete: event.checked
      }).then((e: any) => {
        console.log(e)
        if (e.body.status === 'ok') {
          checklistItem.isComplete = event.checked;
        } else {

        }
      });
    }
  }

  // creates the checklist
  generateIngredients() {
    console.log(this.measurementItem)
    this.server.setChecklistItems({
      measurement: this.measurementItem,
      ingredient: this.ingredientsItem,
      checklistId: this.checklistId
    }).then((e: any) => {
      if (e.body.status === 'ok') {
        let measurement = this.measurementItem;
        let ingredient = this.ingredientsItem;
        this.checklistItems?.push(new ChecklistItem(e.body.itemId, parseInt(this.checklistId), measurement, ingredient, false))
      } else {

      }
    });
  }
}

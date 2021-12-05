// TODO:
// Populate from database
// Implement user settings (?)

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';
import { DialogMeasurement } from '../item-selector/item-selector.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {


  user:string = '';
  sub:any;

  constructor(private _Activatedroute:ActivatedRoute,private _router:Router,public dialog: MatDialog,private server:ServerService) { }

  ngOnInit(): void {
    // this.sub = this._Activatedroute.params.subscribe(params => {
    //   console.log(params)
    //   this.user = params['user'];
    //   });
    //   console.log(this.user);
  }


  addRecipe(){
    let dialogRef = this.dialog.open(RecipeCreateDialog, {
      width: '250px',
      data: {type: 'recipe',name:'',description:'' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result)
        this.server.loginAccount({
          name:result.name,
          description:result.description,
        }).then((e:any) => {
          if (e.body.status === 'ok'){
            console.log(e)
            // this._router.navigateByUrl('/recipe-builder',{state:{user: e.body.user}})
          } else{
    
          }
        })
        // this.currentItem = result + ' ' + this.currentItem;
      }
    });
  }

  addChecklist(){

  }

}
@Component({
  selector: 'recipe-creation-dialog',
  template: `<p>Name:</p><input matInput [(ngModel)]="data.name" name="description">
  <p>Description:</p><input matInput [(ngModel)]="data.description" name="description">
  <mat-dialog-actions>
  <button mat-button (click)="onNoClick()">No</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-button [mat-dialog-close]="data">Yes</button>
</mat-dialog-actions>
  `,
})
export class RecipeCreateDialog {

  type:string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogMeasurement>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

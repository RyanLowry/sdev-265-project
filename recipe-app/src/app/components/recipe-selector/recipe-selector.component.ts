import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-selector',
  templateUrl: './recipe-selector.component.html',
  styleUrls: ['./recipe-selector.component.css']
})
export class RecipeSelectorComponent implements OnInit {
  measurementItem:string = '';
  ingredientsItem:string = '';
  preparedItem:string = '';
  steps:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  checkComplete(sectionItem:any){
    switch(sectionItem.section) {
      case 'measurement':
        this.measurementItem = sectionItem.value;
        break;
        case 'ingredients':
          this.ingredientsItem = sectionItem.value;
        break;
        case 'prepared':
          this.preparedItem = sectionItem.value;
          break;
    }
  }
  generateIngredients(){
    this.steps.push(`${this.measurementItem} ${this.ingredientsItem} ${this.preparedItem}`)
  }
}

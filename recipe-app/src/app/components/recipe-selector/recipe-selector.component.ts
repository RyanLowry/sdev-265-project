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
  @ViewChild("measure",{read:ElementRef}) measurementChild? : ElementRef
  @ViewChild("ingredient") ingredientChild? : ElementRef
  @ViewChild("prepared") preparedChild? : ElementRef


  constructor() { }

  ngOnInit(): void {
  }
  checkComplete(secti:any){
    switch(secti.section) {
      case 'measurement':
        this.measurementItem = secti.value;
        break;
        case 'ingredients':
          this.ingredientsItem = secti.value;
        break;
        case 'prepared':
          this.preparedItem = secti.value;
          break;
    }
  }
  generateIngredients(){
    this.steps.push(`${this.measurementItem} ${this.ingredientsItem} ${this.preparedItem}`)
  }
}

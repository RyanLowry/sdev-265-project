import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecipeItem } from 'src/app/models/recipe-item';

@Component({
  selector: 'app-recipe-selector',
  templateUrl: './recipe-selector.component.html',
  styleUrls: ['./recipe-selector.component.css']
})
export class RecipeSelectorComponent implements OnInit {
  measurementItem:string = '';
  ingredientsItem:string = '';
  preparedItem:string = '';
  steps:RecipeItem[] = [];
  selectedItem? : RecipeItem;

  constructor() { }

  ngOnInit(): void {
  }
  checkComplete(sectionItem:any){
    console.log(sectionItem)
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

  changeItem(item:RecipeItem){
    console.log(item)
    this.selectedItem = item;
    this.measurementItem = item.measurement;
    this.ingredientsItem = item.ingredient;
    this.preparedItem = item.preparation;

  }

  generateIngredients(){
    console.log(this.measurementItem)
    let item = new RecipeItem(0,0,'','','')
    if (this.selectedItem){
      let itemIndex = this.steps.indexOf(this.selectedItem);
      this.steps[itemIndex] = new RecipeItem(0,0,this.measurementItem,this.ingredientsItem,this.preparedItem);
    } else{
      item = new RecipeItem(0,0,this.measurementItem,this.ingredientsItem,this.preparedItem);
      this.steps.push(item);
    }
    
    this.selectedItem = undefined;
    this.measurementItem = '';
    this.ingredientsItem = '';
    this.preparedItem = '';
  }
}

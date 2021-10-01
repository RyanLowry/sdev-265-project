import { Component, Input, OnChanges, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit,OnChanges {

  @Input() currentType = '';

  measurement = ['cups','liters','ounces'];
  ingredients = ['beef','carrots','blueberries'];
  prepared = ['sliced','diced','broiled']
  currentArray? : string[];
  currentItem = '';
  @Output() itemCompleteEvent = new EventEmitter<any>();
  @Output() itemSubmit = new EventEmitter<String[]>();

  constructor() {

  }
   ngOnChanges() {
    switch(this.currentType) {
      case 'measurement':
        this.currentArray = this.measurement;
        break;
        case 'ingredients':
          this.currentArray = this.ingredients
        break;
        case 'prepared':
          this.currentArray = this.prepared
          break;
    }
  }
  itemSelected(item:string){
    this.currentItem = item;
    this.itemCompleteEvent.emit({section:this.currentType,value:this.currentItem});
  }
  ngOnInit(): void {
  }

}

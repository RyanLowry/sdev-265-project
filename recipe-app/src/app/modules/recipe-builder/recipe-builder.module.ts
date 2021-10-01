import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSelectorComponent } from 'src/app/components/item-selector/item-selector.component';
import { RecipeSelectorComponent } from 'src/app/components/recipe-selector/recipe-selector.component';
import { MatTabsModule } from '@angular/material/tabs'
import { RecipeBuilderRoutingModule} from './recipe-builder-routing.module'

@NgModule({
  declarations: [ItemSelectorComponent,RecipeSelectorComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RecipeBuilderRoutingModule
  ],
  bootstrap:[RecipeSelectorComponent]
})
export class RecipeBuilderModule { }

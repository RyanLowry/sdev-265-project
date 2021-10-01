import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo:'',
    pathMatch:'full',
  },
  {
    path:'recipe-builder',
    loadChildren: () => import ('./modules/recipe-builder/recipe-builder.module').then(mod => mod.RecipeBuilderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

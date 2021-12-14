import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Checklist } from 'src/app/models/checklist';
import { Recipe } from 'src/app/models/recipe';
import { ServerService } from 'src/app/server.service';
import { DialogMeasurement } from '../item-selector/item-selector.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {


  user: string = '';
  recipes: Recipe[] = [];
  sharedRecipes: Recipe[] = [];
  checklists: Checklist[] = [];
  routeState: any;


  
  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, public dialog: MatDialog, private server: ServerService, public toastr: ToastrService) {
    // this project doesn't handle routing well, so it's important to store user information locally because if not then refreshes will mess with the project.
    if (this._router) {
      if (this._router.getCurrentNavigation()?.extras.state) {
        this.routeState = this._router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
          this.user = this.routeState.user;
          localStorage.setItem("username", this.user);
        }
      }
    }
    if (localStorage.getItem("username")) {
      this.user = localStorage.getItem("username") || '';
    }
    // put this inside the constructor to prevent jittery loads
    this.server.getRecipes({
    }).then((e: any) => {
      if (e.body.status === 'ok') {
        console.log(e.body.recipes)
        for (let recipe of e.body.recipes) {
          this.recipes?.push(new Recipe(recipe.recipe_id, recipe.name, recipe.description, recipe.instructions))
        }
      } else {
        this.toastr.error("Unable to get recipes")
      }
    })
    this.server.getChecklist({
    }).then((e: any) => {
      if (e.body.status === 'ok') {
        console.log(e.body.checklist)
        for (let recipe of e.body.checklist) {
          this.checklists?.push(new Checklist(recipe.checklist_id, recipe.name, recipe.description))
        }
      } else {

      }
    })
    this.server.getShared({
    }).then((e: any) => {
      if (e.body.status === 'ok') {
        console.log(e.body.sharedRecipes)
        for (let recipe of e.body.sharedRecipes) {
          this.sharedRecipes?.push(new Recipe(recipe.recipe_id, recipe.name, recipe.description, recipe.instructions))
        }
      } else {
        this.toastr.error("Unable to get shared recipes")
      }
    })
  }

  ngOnInit(): void {
  }

  deleteRecipe(recipe: Recipe) {
    if (confirm("Delete this recipe?") === true) {
      this.server.removeRecipe({
        id: recipe.id
      }).then((e: any) => {
        if (e.body.status === 'ok') {
          this.recipes.splice(this.recipes.indexOf(recipe), 1);
          this.toastr.success('item removed')
        } else {
          this.toastr.error('something went wrong')
        }
      });
    }

  }
  deleteChecklist(checklist: Checklist) {
    if (confirm("Delete this checklist?") === true) {
      this.server.removeChecklist({
        id: checklist.id
      }).then((e: any) => {
        if (e.body.status === 'ok') {
          this.checklists.splice(this.checklists.indexOf(checklist), 1);
          this.toastr.success('item removed')
        } else {
          this.toastr.error('something went wrong')
        }
      });
    }

  }

  goToRecipeBuilder(id?: number, instructions?: string) {
    if (id) {
      this._router.navigateByUrl(`/recipe-builder`, { state: { recipeId: id, instructions: instructions } })
    }
  }
  goToChecklist(id?: number) {
    if (id) {
      this._router.navigateByUrl(`/checklist`, { state: { checklistId: id, } })
    }
  }


  // adding new core items (recipes/checklists/shares) to this project involves using mat dialogs. 
  // You can see how to implement them below and how the mat dialogs are implemented below that.
  addRecipe() {
    // open dialog
    let dialogRef = this.dialog.open(RecipeCreateDialog, {
      width: '250px',
      data: { type: 'recipe', name: '', description: '' }
    });
    // will fire after hitting confirm
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        // create new recipe if items exist
        this.server.createRecipe({
          name: result.name,
          description: result.description,
        }).then((e: any) => {
          // if server sends back ok, it's safe to add information to website, could use more security features though.
          if (e.body.status === 'ok') {
            this.recipes?.push(new Recipe(e.body.recipeId, result.name, result.description))
          } else {
            this.toastr.error("Unable to create a recipe")
          }
        }).catch(e => {
          this.toastr.error("Unable to create a recipe")

        })
      }
    });
  }

  addChecklist() {

    let dialogRef = this.dialog.open(RecipeCreateDialog, {
      width: '400px',
      data: { type: 'recipe', name: '', description: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.server.createChecklist({
          name: result.name,
          description: result.description,
        }).then((e: any) => {
          if (e.body.status === 'ok') {
            this.checklists?.push(new Checklist(e.body.checklist, result.name, result.description))
          } else {
            this.toastr.error("Unable to create a checklist")
          }
        }).catch(e => {
          this.toastr.error("Unable to create a checklist")

        })
      }
    });
  }
  shareRecipe(recipeId?: number) {
    let shareDialog = this.dialog.open(RecipeViewDialog, {
      width: '400px',
      data: { name: '' }
    });
    shareDialog.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.server.shareRecipe({
          recipient: result.name,
          recipe: recipeId
        }).then((e: any) => {
          if (e.body.status === 'ok') {
            this.toastr.success("recipe sent to recipient")
          } else {
            this.toastr.error("Unable to share a recipe")
          }
        }).catch(e => {
          this.toastr.error("Unable to share a recipe")
        })
      }
    });
  }
}

// this is how to implement a material dialog. The template can also be a html file if they get complicated.
@Component({
  selector: 'recipe-creation-dialog',
  template: `<p>Name:</p><input matInput [(ngModel)]="data.name" name="description">
  <p>Description:</p><input matInput [(ngModel)]="data.description" name="description">
  <mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Cancel</button>
  <button mat-button [mat-dialog-close]="data">Create</button>
</mat-dialog-actions>
  `,
})
export class RecipeCreateDialog {

  type: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogMeasurement>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // prevents that afterclose() function from firing, used in the template on cancel.
  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'recipe-share-dialog',
  template: `
  <mat-dialog-content>
  <p>Enter recipient username:</p><input matInput [(ngModel)]="data.name" name="description">
  </mat-dialog-content>

  <mat-dialog-actions>
  <button mat-button (click)="onNoClick()">cancel</button>
  <button mat-button [mat-dialog-close]="data">share</button>
</mat-dialog-actions>
  `,
})
export class RecipeViewDialog {

  type: string = '';

  constructor(
    public shareDialog: MatDialogRef<DialogMeasurement>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.shareDialog.close();
  }

}

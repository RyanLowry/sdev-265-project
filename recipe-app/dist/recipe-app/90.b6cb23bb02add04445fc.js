"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[90],{1090:(b,h,o)=>{o.r(h),o.d(h,{RecipeBuilderModule:()=>S});var u=o(8583);class d{constructor(c,t,n,r,s){this.id=c,this.recipeId=t,this.measurement=n,this.ingredient=r,this.preparation=s}}var e=o(7716),g=o(2305),v=o(1312),m=o(3679),I=o(1095);const C=function(i){return{"selected-item":i}};function Z(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().changeItem(s)}),e._uU(2),e.qZA(),e.qZA()}if(2&i){const t=c.$implicit,n=c.index,r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(5,C,r.selectedItem==t)),e.xp6(1),e.HOy(" ",n+1,": ",t.measurement," ",t.ingredient," ",t.preparation,"")}}let f=(()=>{class i{constructor(t,n){var r,s;this._router=t,this.server=n,this.measurementItem="",this.ingredientsItem="",this.preparedItem="",this.steps=[],this.recipeId="",this._router&&(null===(r=this._router.getCurrentNavigation())||void 0===r?void 0:r.extras.state)&&(this.routeState=null===(s=this._router.getCurrentNavigation())||void 0===s?void 0:s.extras.state,this.routeState&&(this.recipeId=this.routeState.recipeId,localStorage.setItem("currentRecipe",this.recipeId),console.log(this.routeState.instructions),this.recipeInstructions=this.routeState.instructions,localStorage.setItem("currentInstructions",this.recipeInstructions))),localStorage.getItem("currentRecipe")&&(this.recipeId=localStorage.getItem("currentRecipe")||""),(localStorage.getItem("currentInstructions")||""!=this.recipeInstructions)&&(this.recipeInstructions=localStorage.getItem("currentInstructions")||""),this.server.getRecipeItems({recipeId:this.recipeId}).then(p=>{var l;if("ok"===p.body.status){console.log(this.recipeId),console.log(p.body.steps);for(let a of p.body.steps)null===(l=this.steps)||void 0===l||l.push(new d(a.recipeItem_id,a.recipeId,a.measurement,a.ingredient,a.preparation))}})}ngOnInit(){}updateRecipeInformation(){this.server.updateRecipeInfo({recipeId:this.recipeId,instructions:this.recipeInstructions,itemLength:this.steps.length}).then(t=>{"ok"===t.body.status&&(console.log(t.body.item),this._router.navigateByUrl("/user"))})}returnToUser(){this._router.navigateByUrl("/user")}changeItem(t){this.selectedItem===t?(this.selectedItem=void 0,this.measurementItem="",this.ingredientsItem="",this.preparedItem=""):(this.selectedItem=t,this.measurementItem=t.measurement,this.ingredientsItem=t.ingredient,this.preparedItem=t.preparation),console.log(this.selectedItem)}generateIngredients(){if(console.log(this.measurementItem),new d(0,0,"","",""),this.selectedItem){let n=this.steps.indexOf(this.selectedItem);console.log(n),this.server.updateRecipeItems({itemId:this.steps[n].id,measurement:this.measurementItem,preparation:this.preparedItem,ingredient:this.ingredientsItem}).then(r=>{if("ok"===r.body.status){let s=this.measurementItem,p=this.preparedItem,l=this.ingredientsItem;this.steps[n]=new d(this.steps[n].id,parseInt(this.recipeId),s,l,p)}})}else this.server.setRecipeItems({measurement:this.measurementItem,preparation:this.preparedItem,ingredient:this.ingredientsItem,recipeId:this.recipeId}).then(n=>{var r;if("ok"===n.body.status){let s=this.measurementItem,p=this.preparedItem,l=this.ingredientsItem;null===(r=this.steps)||void 0===r||r.push(new d(n.body.itemId,parseInt(this.recipeId),s,l,p))}});this.selectedItem=void 0}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.F0),e.Y36(v.N))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-selector"]],decls:25,vars:6,consts:[[1,"recipe-creator-container"],[1,"recipe-item"],["type","text","name","measurement",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",2,"margin-top","15px","margin-bottom","15px",3,"disabled","click"],[4,"ngFor","ngForOf"],["rows","10",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","secondary",3,"click"],[1,"ing-item",3,"ngClass","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._uU(3,"Measurement:"),e.TgZ(4,"input",2),e.NdJ("ngModelChange",function(s){return n.measurementItem=s}),e.qZA(),e.qZA(),e.TgZ(5,"div",1),e._uU(6,"Ingredient:"),e.TgZ(7,"input",3),e.NdJ("ngModelChange",function(s){return n.ingredientsItem=s}),e.qZA(),e.qZA(),e.TgZ(8,"div",1),e._uU(9,"Prepared:"),e.TgZ(10,"input",3),e.NdJ("ngModelChange",function(s){return n.preparedItem=s}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"button",4),e.NdJ("click",function(){return n.generateIngredients()}),e._uU(13,"Save Instruction"),e.qZA(),e.qZA(),e.TgZ(14,"h3"),e._uU(15,"Ingredient list:"),e.qZA(),e.YNc(16,Z,3,7,"div",5),e.TgZ(17,"h3"),e._uU(18,"Instructions:"),e.qZA(),e.TgZ(19,"textarea",6),e.NdJ("ngModelChange",function(s){return n.recipeInstructions=s}),e.qZA(),e.TgZ(20,"div"),e.TgZ(21,"button",7),e.NdJ("click",function(){return n.updateRecipeInformation()}),e._uU(22,"Submit item"),e.qZA(),e.TgZ(23,"button",8),e.NdJ("click",function(){return n.returnToUser()}),e._uU(24,"Cancel"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngModel",n.measurementItem),e.xp6(3),e.Q6J("ngModel",n.ingredientsItem),e.xp6(3),e.Q6J("ngModel",n.preparedItem),e.xp6(2),e.Q6J("disabled",""===n.measurementItem||""===n.ingredientsItem),e.xp6(4),e.Q6J("ngForOf",n.steps),e.xp6(3),e.Q6J("ngModel",n.recipeInstructions))},directives:[m.Fj,m.JJ,m.On,I.lW,u.sg,u.mk],styles:[".ing-item[_ngcontent-%COMP%]:hover{background-color:gray}.selected-item[_ngcontent-%COMP%]{background-color:gray}.recipe-creator-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:500px}.recipe-item[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-bottom:20px}"]}),i})();var _=o(5939),R=o(8756);const M=[{path:"",component:f}];let T=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild(M)],g.Bz]}),i})();var y=o(3738);let S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i,bootstrap:[f]}),i.\u0275inj=e.cJS({imports:[[u.ez,_.Nh,I.ot,m.u5,R.Is,y.QW,T]]}),i})()}}]);
"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[863],{863:(O,T,c)=>{c.r(T),c.d(T,{UserModule:()=>D});var C=c(8583),g=c(2305),l=c(8756);class A{constructor(s,t,i){this.id=s,this.description=i,this.name=t}}class m{constructor(s,t,i,r){this.id=s,this.description=i,this.instructions=r,this.name=t}}var e=c(7716),k=c(1312),q=c(7185),Z=c(5939),x=c(1095),R=c(6627),_=c(3738),u=c(3679);function y(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"mat-card",9),e.TgZ(2,"mat-card-content",10),e.TgZ(3,"h3",11),e._uU(4),e.qZA(),e.TgZ(5,"div",12),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"mat-card-actions",13),e.TgZ(8,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().shareRecipe(n.id)}),e.TgZ(9,"mat-icon"),e._uU(10,"share"),e.qZA(),e._uU(11," share "),e.qZA(),e.TgZ(12,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().deleteRecipe(n)}),e.TgZ(13,"mat-icon"),e._uU(14,"delete"),e.qZA(),e._uU(15," delete "),e.qZA(),e.TgZ(16,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().goToRecipeBuilder(n.id,n.instructions)}),e.TgZ(17,"mat-icon"),e._uU(18,"edit"),e.qZA(),e._uU(19," view/Edit "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=s.$implicit;e.xp6(4),e.hij(" ",t.name," "),e.xp6(2),e.hij(" Description: ",t.description," ")}}function M(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"mat-card",9),e.TgZ(2,"mat-card-content",10),e.TgZ(3,"h3",11),e._uU(4),e.qZA(),e.TgZ(5,"div",12),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"mat-card-actions",13),e.TgZ(8,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().goToRecipeBuilder(n.id,n.instructions)}),e.TgZ(9,"mat-icon"),e._uU(10,"edit"),e.qZA(),e._uU(11," view/Edit "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=s.$implicit;e.xp6(4),e.hij(" ",t.name," "),e.xp6(2),e.hij(" Description: ",t.description," ")}}function I(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"mat-card",9),e.TgZ(2,"mat-card-content",10),e.TgZ(3,"h3",11),e._uU(4),e.qZA(),e.TgZ(5,"div",12),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"mat-card-actions",13),e.TgZ(8,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().deleteChecklist(n)}),e.TgZ(9,"mat-icon"),e._uU(10,"delete"),e.qZA(),e._uU(11," delete "),e.qZA(),e.TgZ(12,"button",4),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().goToChecklist(n.id)}),e.TgZ(13,"mat-icon"),e._uU(14,"edit"),e.qZA(),e._uU(15," view/Edit "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=s.$implicit;e.xp6(4),e.hij(" ",t.name," "),e.xp6(2),e.hij(" Description: ",t.description," ")}}let b=(()=>{class o{constructor(t,i,r,n,h){var f,v;this._Activatedroute=t,this._router=i,this.dialog=r,this.server=n,this.toastr=h,this.user="",this.recipes=[],this.sharedRecipes=[],this.checklists=[],this._router&&(null===(f=this._router.getCurrentNavigation())||void 0===f?void 0:f.extras.state)&&(this.routeState=null===(v=this._router.getCurrentNavigation())||void 0===v?void 0:v.extras.state,this.routeState&&(this.user=this.routeState.user,localStorage.setItem("username",this.user))),localStorage.getItem("username")&&(this.user=localStorage.getItem("username")||""),this.server.getRecipes({}).then(p=>{var d;if("ok"===p.body.status)for(let a of p.body.recipes)null===(d=this.recipes)||void 0===d||d.push(new m(a.recipe_id,a.name,a.description,a.instructions));else this.toastr.error("Unable to get recipes")}),this.server.getChecklist({}).then(p=>{var d;if("ok"===p.body.status)for(let a of p.body.checklist)null===(d=this.checklists)||void 0===d||d.push(new A(a.checklist_id,a.name,a.description))}),this.server.getShared({}).then(p=>{var d;if("ok"===p.body.status)for(let a of p.body.sharedRecipes)null===(d=this.sharedRecipes)||void 0===d||d.push(new m(a.recipe_id,a.name,a.description,a.instructions));else this.toastr.error("Unable to get shared recipes")})}ngOnInit(){}deleteRecipe(t){!0===confirm("Delete this recipe?")&&this.server.removeRecipe({id:t.id}).then(i=>{"ok"===i.body.status?(this.recipes.splice(this.recipes.indexOf(t),1),this.toastr.success("item removed")):this.toastr.error("something went wrong")})}deleteChecklist(t){!0===confirm("Delete this checklist?")&&this.server.removeChecklist({id:t.id}).then(i=>{"ok"===i.body.status?(this.checklists.splice(this.checklists.indexOf(t),1),this.toastr.success("item removed")):this.toastr.error("something went wrong")})}logout(){this.server.logoutAccount({}).then(t=>{"ok"===t.body.status&&this._router.navigateByUrl("/login")})}goToRecipeBuilder(t,i){t&&this._router.navigateByUrl("/recipe-builder",{state:{recipeId:t,instructions:i}})}goToChecklist(t){t&&this._router.navigateByUrl("/checklist",{state:{checklistId:t}})}addRecipe(){this.dialog.open(U,{width:"250px",data:{type:"recipe",name:"",description:""}}).afterClosed().subscribe(i=>{null!=i&&this.server.createRecipe({name:i.name,description:i.description}).then(r=>{var n;"ok"===r.body.status?null===(n=this.recipes)||void 0===n||n.push(new m(r.body.recipeId,i.name,i.description)):this.toastr.error("Unable to create a recipe")}).catch(r=>{this.toastr.error("Unable to create a recipe")})})}addChecklist(){this.dialog.open(U,{width:"400px",data:{type:"recipe",name:"",description:""}}).afterClosed().subscribe(i=>{null!=i&&this.server.createChecklist({name:i.name,description:i.description}).then(r=>{var n;"ok"===r.body.status?null===(n=this.checklists)||void 0===n||n.push(new A(r.body.checklist,i.name,i.description)):this.toastr.error("Unable to create a checklist")}).catch(r=>{this.toastr.error("Unable to create a checklist")})})}shareRecipe(t){this.dialog.open(J,{width:"400px",data:{name:""}}).afterClosed().subscribe(r=>{null!=r&&this.server.shareRecipe({recipient:r.name,recipe:t}).then(n=>{"ok"===n.body.status?this.toastr.success("recipe sent to recipient"):this.toastr.error("Unable to share a recipe")}).catch(n=>{this.toastr.error("Unable to share a recipe")})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.gz),e.Y36(g.F0),e.Y36(l.uw),e.Y36(k.N),e.Y36(q._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-information"]],decls:30,vars:4,consts:[[1,"user-information"],[1,"user-header"],["label","Recipes"],[1,"user-tab-info"],["mat-raised-button","","color","primary",3,"click"],[1,"recipe-holder"],[4,"ngFor","ngForOf"],["label","shared recipes",1,"user-header"],["label","Checklists",1,"user-header"],[1,"recipe-card"],[1,"recipe-info"],[1,"recipe-name"],[1,"recipe-description"],[1,"recipe-buttons"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"h3"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"mat-tab-group",1),e.TgZ(5,"mat-tab",2),e.TgZ(6,"div",3),e.TgZ(7,"button",4),e.NdJ("click",function(){return i.addRecipe()}),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA(),e._uU(10," Add Recipe "),e.qZA(),e.TgZ(11,"div",5),e.YNc(12,y,20,2,"div",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"mat-tab",7),e.TgZ(14,"div",3),e.TgZ(15,"div",5),e.YNc(16,M,12,2,"div",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"mat-tab",8),e.TgZ(18,"div",3),e.TgZ(19,"button",4),e.NdJ("click",function(){return i.addChecklist()}),e.TgZ(20,"mat-icon"),e._uU(21,"add"),e.qZA(),e._uU(22," Add Checklist "),e.qZA(),e.TgZ(23,"div",5),e.YNc(24,I,16,2,"div",6),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div"),e.TgZ(26,"button",4),e.NdJ("click",function(){return i.logout()}),e.TgZ(27,"mat-icon"),e._uU(28,"logout"),e.qZA(),e._uU(29," logout "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.hij(" Welcome,",i.user," "),e.xp6(9),e.Q6J("ngForOf",i.recipes),e.xp6(4),e.Q6J("ngForOf",i.sharedRecipes),e.xp6(8),e.Q6J("ngForOf",i.checklists))},directives:[Z.SP,Z.uX,x.lW,R.Hw,C.sg,_.a8,_.dn,_.hq],styles:[".recipe-card[_ngcontent-%COMP%]{min-width:500px}.recipe-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.recipe-description[_ngcontent-%COMP%]{margin-bottom:25px}.user-information[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.recipe-holder[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:100%}.user-header[_ngcontent-%COMP%]{height:80vh;display:flex;flex-direction:column;min-width:960px}.user-tab-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:50vh}.user-tab-info[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-bottom:15px}"]}),o})(),U=(()=>{class o{constructor(t,i){this.dialogRef=t,this.data=i,this.type=""}onNoClick(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.so),e.Y36(l.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["recipe-creation-dialog"]],decls:11,vars:3,consts:[["matInput","","name","description",3,"ngModel","ngModelChange"],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close"]],template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"Name:"),e.qZA(),e.TgZ(2,"input",0),e.NdJ("ngModelChange",function(n){return i.data.name=n}),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Description:"),e.qZA(),e.TgZ(5,"input",0),e.NdJ("ngModelChange",function(n){return i.data.description=n}),e.qZA(),e.TgZ(6,"mat-dialog-actions"),e.TgZ(7,"button",1),e.NdJ("click",function(){return i.onNoClick()}),e._uU(8,"Cancel"),e.qZA(),e.TgZ(9,"button",2),e._uU(10,"Create"),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngModel",i.data.name),e.xp6(3),e.Q6J("ngModel",i.data.description),e.xp6(4),e.Q6J("mat-dialog-close",i.data))},directives:[u.Fj,u.JJ,u.On,l.H8,l.ZT],encapsulation:2}),o})(),J=(()=>{class o{constructor(t,i){this.shareDialog=t,this.data=i,this.type=""}onNoClick(){this.shareDialog.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.so),e.Y36(l.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["recipe-share-dialog"]],decls:9,vars:2,consts:[["matInput","","name","description",3,"ngModel","ngModelChange"],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-dialog-content"),e.TgZ(1,"p"),e._uU(2,"Enter recipient username:"),e.qZA(),e.TgZ(3,"input",0),e.NdJ("ngModelChange",function(n){return i.data.name=n}),e.qZA(),e.qZA(),e.TgZ(4,"mat-dialog-actions"),e.TgZ(5,"button",1),e.NdJ("click",function(){return i.onNoClick()}),e._uU(6,"cancel"),e.qZA(),e.TgZ(7,"button",2),e._uU(8,"share"),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngModel",i.data.name),e.xp6(4),e.Q6J("mat-dialog-close",i.data))},directives:[l.xY,u.Fj,u.JJ,u.On,l.H8,l.ZT],encapsulation:2}),o})();const w=[{path:"",component:b}];let N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(w)],g.Bz]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o,bootstrap:[b]}),o.\u0275inj=e.cJS({imports:[[C.ez,N,Z.Nh,u.u5,l.Is]]}),o})()}}]);
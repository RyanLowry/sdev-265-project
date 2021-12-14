"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[743],{4743:(P,v,i)=>{i.r(v),i.d(v,{LoginModule:()=>u});var f=i(8583),p=i(2305),t=i(7716),m=i(1312),L=i(7185),g=i(5939),C=i(1095);let c=(()=>{class r{constructor(s,n,o,d){this.server=s,this._router=n,this.toastr=o}ngOnInit(){}loginUser(s,n){this.server.loginAccount({username:s,password:n}).then(o=>{o&&"ok"===o.body.status&&this._router.navigateByUrl("/user",{state:{user:o.body.user}})})}registerUser(s,n,o,d){n.length<=3?this.toastr.error("password not long enough"):n===o?this.server.createAccount({username:s,password:n,email:d}).then(h=>{"ok"===h.body.status&&this._router.navigateByUrl("/user",{state:{user:h.body.user}})}):this.toastr.error("passwords don't match")}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(m.N),t.Y36(p.F0),t.Y36(L._W),t.Y36(t.s_b))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:22,vars:0,consts:[[1,"login-form"],["label","login"],["type","text","name","username","placeholder","Username","id","username","required",""],["username",""],["type","password","name","password","placeholder","Password","id","password","required",""],["password",""],["mat-raised-button","","color","primary","type","submit",2,"width","100%",3,"click"],["label","register"],["type","text","name","username","placeholder","Username","required",""],["usernamereg",""],["type","password","name","password","placeholder","Password","required",""],["passwordreg",""],["type","password","name","confirm password","placeholder","Reenter Password","required",""],["confPassword",""],["type","email","name","email","placeholder","Email","required",""],["email",""]],template:function(s,n){if(1&s){const o=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-tab-group"),t.TgZ(4,"mat-tab",1),t._UZ(5,"input",2,3),t._UZ(7,"input",4,5),t.TgZ(9,"button",6),t.NdJ("click",function(){t.CHM(o);const h=t.MAs(6),y=t.MAs(8);return n.loginUser(h.value,y.value)}),t._uU(10,"Login"),t.qZA(),t.qZA(),t.TgZ(11,"mat-tab",7),t._UZ(12,"input",8,9),t._UZ(14,"input",10,11),t._UZ(16,"input",12,13),t._UZ(18,"input",14,15),t.TgZ(20,"button",6),t.NdJ("click",function(){t.CHM(o);const h=t.MAs(13),y=t.MAs(15),T=t.MAs(17),b=t.MAs(19);return n.registerUser(h.value,y.value,T.value,b.value)}),t._uU(21,"Register"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}},directives:[g.SP,g.uX,C.lW],styles:[".login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#4d4d4d;font-size:24px;padding:20px 0}.login-form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{width:100%;padding:15px;border:1px solid #dddddd;margin-bottom:15px;box-sizing:border-box}.login-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{width:100%;padding:15px;background-color:#888;border:0;box-sizing:border-box;cursor:pointer;font-weight:bold;color:#fff}"]}),r})();const l=[{path:"",component:c}];let e=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[p.Bz.forChild(l)],p.Bz]}),r})(),u=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r,bootstrap:[c]}),r.\u0275inj=t.cJS({imports:[[f.ez,e,g.Nh]]}),r})()},1312:(P,v,i)=>{function f(c,l,e,u,r,a,s){try{var n=c[a](s),o=n.value}catch(d){return void e(d)}n.done?l(o):Promise.resolve(o).then(u,r)}i.d(v,{N:()=>C});var t=i(2340),m=i(7716),L=i(1841),g=i(7185);let C=(()=>{class c{constructor(e,u){this.http=e,this.toastr=u,this.serverLocation=t.N.serverUrl||""}request(e,u,r){var a=this;return function(c){return function(){var l=this,e=arguments;return new Promise(function(u,r){var a=c.apply(l,e);function s(o){f(a,u,r,s,n,"next",o)}function n(o){f(a,u,r,s,n,"throw",o)}s(void 0)})}}(function*(){const s=a.http.request(e,u,{withCredentials:!0,body:r,responseType:"json",observe:"response"});return new Promise((n,o)=>{s.subscribe(n,o)}).catch(n=>{a.toastr.error(n.error.status)})})()}createAccount(e){return this.request("POST",`${this.serverLocation}/register`,e)}loginAccount(e){return this.request("POST",`${this.serverLocation}/auth`,e)}createRecipe(e){return this.request("POST",`${this.serverLocation}/addRecipe`,e)}createChecklist(e){return this.request("POST",`${this.serverLocation}/addChecklist`,e)}getRecipes(e){return this.request("POST",`${this.serverLocation}/userRecipe`,e)}getChecklist(e){return this.request("POST",`${this.serverLocation}/userChecklist`,e)}getChecklistItems(e){return this.request("POST",`${this.serverLocation}/getChecklistItem`,e)}getShared(e){return this.request("POST",`${this.serverLocation}/userShared`,e)}setRecipeItems(e){return this.request("POST",`${this.serverLocation}/recipeItem`,e)}setChecklistItems(e){return this.request("POST",`${this.serverLocation}/addChecklistItem`,e)}updateChecklistItems(e){return this.request("PUT",`${this.serverLocation}/addChecklistItem`,e)}getRecipeItems(e){return this.request("POST",`${this.serverLocation}/recipeItems`,e)}updateRecipeItems(e){return this.request("PUT",`${this.serverLocation}/recipeItem`,e)}updateRecipeInfo(e){return this.request("PUT",`${this.serverLocation}/updateRecipe`,e)}shareRecipe(e){return this.request("POST",`${this.serverLocation}/shareRecipe`,e)}logoutAccount(e){return this.request("POST",`${this.serverLocation}/logout`,e)}removeChecklistItems(e){return this.request("DELETE",`${this.serverLocation}/removeChecklistItem`,e)}removeRecipe(e){return this.request("DELETE",`${this.serverLocation}/removeRecipe`,e)}removeChecklist(e){return this.request("DELETE",`${this.serverLocation}/removeChecklist`,e)}}return c.\u0275fac=function(e){return new(e||c)(m.LFG(L.eN),m.LFG(g._W))},c.\u0275prov=m.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);
"use strict";(self.webpackChunkrecipe_app=self.webpackChunkrecipe_app||[]).push([[743],{4743:(v,c,r)=>{r.r(c),r.d(c,{LoginModule:()=>b});var m=r(8583),u=r(9516),e=r(3018),f=r(1312),l=r(5939);let g=(()=>{class n{constructor(o,t){this.server=o,this._router=t}ngOnInit(){}loginUser(o,t){this.server.loginAccount({username:o,password:t}).then(s=>{"ok"===s.body.status&&this._router.navigateByUrl("/user",{state:{user:s.body.user}})})}registerUser(o,t,s,d){t===s&&this.server.createAccount({username:o,password:t,email:d}).then(a=>{"ok"===a.body.status&&this._router.navigateByUrl("/user",{state:{user:a.body.user}})})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(f.N),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:22,vars:0,consts:[[1,"login-form"],["label","login"],["type","text","name","username","placeholder","Username","id","username","required",""],["username",""],["type","password","name","password","placeholder","Password","id","password","required",""],["password",""],["type","submit",3,"click"],["label","register"],["type","text","name","username","placeholder","Username","required",""],["usernamereg",""],["type","password","name","password","placeholder","Password","required",""],["passwordreg",""],["type","password","name","confirm password","placeholder","Password","required",""],["confPassword",""],["type","email","name","email","placeholder","Email","required",""],["email",""]],template:function(o,t){if(1&o){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Login"),e.qZA(),e.TgZ(3,"mat-tab-group"),e.TgZ(4,"mat-tab",1),e._UZ(5,"input",2,3),e._UZ(7,"input",4,5),e.TgZ(9,"button",6),e.NdJ("click",function(){e.CHM(s);const a=e.MAs(6),p=e.MAs(8);return t.loginUser(a.value,p.value)}),e._uU(10,"Login"),e.qZA(),e.qZA(),e.TgZ(11,"mat-tab",7),e._UZ(12,"input",8,9),e._UZ(14,"input",10,11),e._UZ(16,"input",12,13),e._UZ(18,"input",14,15),e.TgZ(20,"button",6),e.NdJ("click",function(){e.CHM(s);const a=e.MAs(13),p=e.MAs(15),y=e.MAs(17),C=e.MAs(19);return t.registerUser(a.value,p.value,y.value,C.value)}),e._uU(21,"Login"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}},directives:[l.SP,l.uX],styles:[".login-form[_ngcontent-%COMP%]{width:540px}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#4d4d4d;font-size:24px;padding:20px 0}.login-form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{width:100%;padding:15px;border:1px solid #dddddd;margin-bottom:15px;box-sizing:border-box}.login-form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{width:100%;padding:15px;background-color:#888;border:0;box-sizing:border-box;cursor:pointer;font-weight:bold;color:#fff}"]}),n})();const h=[{path:"",component:g}];let M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(h)],u.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n,bootstrap:[g]}),n.\u0275inj=e.cJS({imports:[[m.ez,M,l.Nh]]}),n})()}}]);
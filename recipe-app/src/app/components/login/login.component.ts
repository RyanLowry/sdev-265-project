import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { UserModule } from 'src/app/modules/user/user.module';
import { UserRoutingModule } from 'src/app/modules/user/user-routing.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private server: ServerService, private _router: Router,public toastr: ToastrService, vcr: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  // the logic to login an already created user
  loginUser(username: string, password: string) {
    this.server.loginAccount({
      username: username,
      password: password,
    }).then((e: any) => {
      if (e){
        if (e.body.status === 'ok') {
          this._router.navigateByUrl('/user', { state: { user: e.body.user } });
        } else {
          this.toastr.error(e.body.status)
        }
      } else{
        this.toastr.error("Error")
      }

    }).catch((e:any)=>{
      this.toastr.error(e.error.status)
    });
  }
  // the logic to register a non created user
  registerUser(username: string, password: string, confirmPassword: string,email:string) {
    // only checks if they are the same and not much more, this is one things that would need to be made better, both front and back end
    if (password.length <= 3){
      this.toastr.error("password not long enough")
    }
    if ((password === confirmPassword)) {
      this.server.createAccount({
        username: username,
        password: password,
        email:email
      }).then((e: any) => {
        if (e.body.status === 'ok') {
          this._router.navigateByUrl('/user', { state: { user: e.body.user } })
        } else {
        }
      })
    } else{
      this.toastr.error("passwords don't match")
    }
  }
}

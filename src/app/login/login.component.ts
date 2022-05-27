import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "./login.service";
import {LoginResult, UserDetail, UserLogin} from "../models";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = <UserLogin>{ username: '', password: ''};
  logged: LoginResult | undefined;
  userDetail: UserDetail | undefined;
  @Output() ifLogged = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginToApp() {
    const loginData: UserLogin = {
      username: this.loginData.username,
      password: this.loginData.password,
    };

    this.loginService.checkAccount(loginData).subscribe(
      (value) => {
        // console.log(value)
        // console.log(value.headers.keys())
        // console.log(value.headers.get('Authorization'))

        this.userDetail = value.body as UserDetail;
        this.logged = {result: value.ok, error: value.status.toString()}
        this.ifLogged.emit(value.ok);
      }
    );
  }

}

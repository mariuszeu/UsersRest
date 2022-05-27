import {Injectable} from "@angular/core";
import {LoginResult, UserDetail, UserLogin} from "../models";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://apiresttest.eba-wggmghuj.us-east-1.elasticbeanstalk.com';

  private loginData = <UserLogin>{};

  constructor(private http: HttpClient) { }


  checkAccount(loginData: UserLogin): Observable<HttpResponse<UserDetail[]>> {
    return this.http.post<HttpResponse<UserDetail[]>>(this.url + '/api/auth/login', loginData, {observe: 'response'})
      .pipe(tap(console.log));
  }

}

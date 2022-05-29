import {Injectable} from "@angular/core";
import {UserDetail} from "../models";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {elementAt, filter, find, from, last, map, Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private url = 'http://apiresttest.eba-wggmghuj.us-east-1.elasticbeanstalk.com';
  private url = 'http://localhost:3010/users';
  private users = <UserDetail>{};

  constructor(private http: HttpClient) { }


  getUsersService(): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(this.url)
      //TODO: zrobić, aby logowanie nie zapisywało nowego rekordu do db users
      .pipe(
        map(users => users.filter(user => user.email?.length > 0))
      );
  }
  getUserService(userId: number): Observable<UserDetail[]> {
    return this.getUsersService().pipe(
      map(users => users.filter(user => user.id == userId))
    );
  }
  editUserService(userChanged: Partial<UserDetail>): Observable<UserDetail[]> {
    return this.http.patch<UserDetail[]>(this.url + '/'+userChanged.id, userChanged)
      .pipe(
        tap(console.log)
      );
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './User';
import {environment} from '../environments/environment';
import {MessageBox} from './MessageBox';
import {LoginformComponent}from  './loginform/loginform.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly header: HttpHeaders;
  private loginUrl = `${environment.apiURL}/api/v1/login`;
  private signinUrl = `${environment.apiURL}/api/v1/signin`;
  private currentUserSubject = new BehaviorSubject<User>(null);
  userLogin(userid: string, userpassword: string): Observable<HttpResponse<User>> {
    return this.http.post<User>( this.loginUrl,
      null,
      {headers: this.header, observe: 'response', params: {userid, userpassword}})
      .pipe(
        tap(resp => {
          console.log(resp.body.userid);
          if (resp.body.userid !== '用户名或密码错误!') {
            localStorage.setItem('access_token', resp.headers.get('access-token'));
            localStorage.setItem('current_user', resp.body.userid);
            localStorage.setItem('colorblind', 'f');
            localStorage.setItem('scborder', 'f');
          } else {
            LoginformComponent.message = '用户名或密码错误!';
          }
          this.currentUserSubject.next(resp.body);
        }),
        map(() => null)
      );
  }
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  signin(userid: string, userpassword: string): Observable<HttpResponse<MessageBox>> {
      return this.http.post<MessageBox>(this.signinUrl, null,
        {headers: this.header, observe: 'response', params: {userid, userpassword}});
  }
}

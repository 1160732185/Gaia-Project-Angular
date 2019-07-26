import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly header: HttpHeaders;
  private loginUrl = 'http://localhost:8080/api/v1/login';
  private currentUserSubject = new BehaviorSubject<User>(null);
  userLogin(userid: string, userpassword: string): Observable<HttpResponse<User>> {
    return this.http.post<User>( this.loginUrl,
      null,
      {headers: this.header, observe: 'response', params: {userid, userpassword}})
      .pipe(
        tap(resp => {
          localStorage.setItem('access_token', resp.headers.get('access-token'));
          localStorage.setItem('current_user', resp.body.userid);
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
}

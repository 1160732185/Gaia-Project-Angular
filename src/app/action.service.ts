import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageBox} from './MessageBox';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private readonly header: HttpHeaders;
  private doactionUrl = 'http://localhost:8080/api/v1/action';
  chooserace(gameid: string, action: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.doactionUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, action}});
  }
  doaction(gameid: string, action: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.doactionUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, action}});
  }



  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }
}

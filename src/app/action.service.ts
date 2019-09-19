import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MessageBox} from './MessageBox';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private readonly header: HttpHeaders;
  private doactionUrl = `${environment.apiURL}/api/v1/action`;
  private acceptpowerUrl = `${environment.apiURL}/api/v1/power`;
  chooserace(gameid: string, action: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.doactionUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, action}});
  }
  doaction(gameid: string, action: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.doactionUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, action}});
  }
  // tslint:disable-next-line:max-line-length
  leechpower(gameid: string, receiverace: string, location: string, structure: string, accept: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.acceptpowerUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, receiverace, location, structure, accept}});
  }


  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }
}

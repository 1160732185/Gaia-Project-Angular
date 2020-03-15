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
  private savelogUrl = `${environment.apiURL}/api/v1/save`;
  private showlogUrl = `${environment.apiURL}/api/v1/showlog`;
  chooserace(gameid: string, action: string, bid: string): Observable<HttpResponse<MessageBox>> {
    // @ts-ignore
    return this.http.post<MessageBox>(this.doactionUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, action, bid}});
  }
  doaction(gameid: string, action: string, bid: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.doactionUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, action, bid}});
  }
  // tslint:disable-next-line:max-line-length
  leechpower(gameid: string, giverace: string, receiverace: string, location: string, structure: string, accept: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.acceptpowerUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, giverace, receiverace, location, structure, accept}});
  }


  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }
  savelog(gameid: string, userid: string, log: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.savelogUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, userid, log}});
  }
  showlog(gameid: string, userid: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.showlogUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, userid}});
  }
}

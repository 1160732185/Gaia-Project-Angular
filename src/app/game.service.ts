import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './User';
import {MessageBox} from './MessageBox';
import {Game} from './Game';
import {GameDetails} from './GameDetails';
import {environment} from '../environments/environment';
import {Lobby} from './Lobby';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly header: HttpHeaders;
  private userExistUrl = `${environment.apiURL}/api/v1/user`;
  private createGameUrl = `${environment.apiURL}/api/v1/game`;
  private showGamesUrl = `${environment.apiURL}/api/v1/game/userid`;
  private showLobbysUrl = `${environment.apiURL}/api/v1/lobby/userid`;
  private changeRecordUrl = `${environment.apiURL}/api/v1/lobby/cc`;
  private getRecordUrl = `${environment.apiURL}/api/v1/record`;
  userExist(userid: string): Observable<User> {
    const url = `${this.userExistUrl}/${userid}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`check userid=${userid}`)));
  }
  createGame(gameId: string, player1: string, player2: string, player3: string, player4: string, gamemode: string):
    Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.createGameUrl, null,
      {headers: this.header, observe: 'response', params: {gameId, player1, player2, player3, player4, gamemode}}).pipe(
      tap(resp => {
        localStorage.setItem('message', JSON.stringify(resp.body));
      })
    );
  }
  showGames(player: string): Observable<string[]> {
    const url = `${this.showGamesUrl}/${player}`;
    return this.http.get<string[]>(url);
  }
  showLobby(player: string): Observable<Lobby[]> {
    const url = `${this.showLobbysUrl}/${player}`;
    return this.http.get<Lobby[]>(url);
  }
  showGame(gameid: string): Observable<GameDetails> {
    const url = `${this.createGameUrl}/${gameid}`;
    return this.http.get<GameDetails>(url);
  }
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }
  deleteGame(gameid: string) {
    const url = `${this.createGameUrl}/${gameid}`;
    return this.http.delete<void>(url);
  }
  getTop(): Observable<string[][]>  {
    const url = `${environment.apiURL}/api/v1/topscore`;
    return this.http.get<string[][]>(url);
  }
  changeRecord(gameid: string, record: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.changeRecordUrl, null,
      {headers: this.header, observe: 'response', params: {gameid, record}});
  }
  getRecord(gameid: string): Observable<Game> {
    const url = `${this.getRecordUrl}/${gameid}`;
    return this.http.get<Game>(url);
  }
}

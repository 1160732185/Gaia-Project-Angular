import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './User';
import {MessageBox} from './MessageBox';
import {Game} from './Game';
import {GameDetails} from './GameDetails';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly header: HttpHeaders;
  private userExistUrl = `${environment.apiURL}/api/v1/user`;
  private createGameUrl = `${environment.apiURL}/api/v1/game`;
  private showGamesUrl = `${environment.apiURL}/api/v1/game/userid`;
  userExist(userid: string): Observable<User> {
    const url = `${this.userExistUrl}/${userid}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`check userid=${userid}`)));
  }
  createGame(gameId: string, player1: string, player2: string, player3: string, player4: string): Observable<HttpResponse<MessageBox>> {
    return this.http.post<MessageBox>(this.createGameUrl, null,
      {headers: this.header, observe: 'response', params: {gameId, player1, player2, player3, player4}}).pipe(
      tap(resp => {
        localStorage.setItem('message', JSON.stringify(resp.body));
      })
    );
  }
  showGames(player: string): Observable<string[]> {
    const url = `${this.showGamesUrl}/${player}`;
    return this.http.get<string[]>(url);
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
}

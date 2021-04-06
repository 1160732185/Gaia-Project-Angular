import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {NzModalService} from 'ng-zorro-antd';
import {PendingGame} from '../PendingGame';
import {League} from '../League';

@Component({
  selector: 'app-pendinggame',
  templateUrl: './pendinggame.component.html',
  styleUrls: ['./pendinggame.component.css']
})
export class PendinggameComponent implements OnInit {

  constructor(private gameService: GameService, private modalService: NzModalService) {
    this.localStorage = localStorage;
    this.windowsize = window.innerWidth;
    this.showPGames();
    this.showLeagues();
    setInterval(() => {
      this.showPGames();
      this.showLeagues();
    }, 300000);
  }
  windowsize: number;
  localStorage: object;
  errormessage: string;
  Pgames: PendingGame[];
  League: League[][];
  activeKey = [99];
  showPGames() {
    this.gameService.showPGames()
      .subscribe((data) => {
        this.Pgames = data;
      });
  }

  showLeagues() {
    this.gameService.showLeagues()
      .subscribe((data) => {
        this.League = data;
      });
  }

  ngOnInit() {

  }

  enterPGame(gameid: string) {
    this.gameService.enterPGame(gameid, localStorage.getItem('current_user'))
      .subscribe((data) => {
        this.errormessage = data.body.message;
      });
  }

  deletePGame(gameid: string) {
    this.gameService.deletePGame(gameid)
      .subscribe((data) => {
      });
  }

  enterPLeague(leagueid: any) {
    this.gameService.enterPLeague(leagueid, localStorage.getItem('current_user'))
      .subscribe((data) => {
        this.errormessage = data.body.message;
      });
  }



  onChange(event) {
    console.log(event);
  }


}

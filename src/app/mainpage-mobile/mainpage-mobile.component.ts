import { Component, OnInit } from '@angular/core';
import {Game} from '../Game';
import {Lobby} from '../Lobby';
import {GameService} from '../game.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-mainpage-mobile',
  templateUrl: './mainpage-mobile.component.html',
  styleUrls: ['./mainpage-mobile.component.css']
})
export class MainpageMobileComponent implements OnInit {
  isCollapsed = false;
  userid: string;
  isVisible = false;
  abc: string[];
  game: Game;
  gr: string;
  gameid: string;
  localStorage: object;
  private myGames: Lobby[];


  constructor(private gameService: GameService, private modalService: NzModalService) {
    this.userid = localStorage.getItem('current_user');
    this.showGames(this.userid);
    setInterval(() => {
      this.showGames(this.userid);
    }, 5000);
  }

  ngOnInit() {
  }


  showGames(player: string) {
    this.localStorage = localStorage;
    console.log('show games');
    this.gameService.showLobby(player)
      .subscribe((data) => {
        this.myGames = data;
        console.log(this.myGames);
      });
  }

  deleteGame(gameid: string) {
    this.gameService.deleteGame(gameid)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  showDeleteConfirm(gameid: string): void {
    this.modalService.confirm({
      nzTitle: '永久删除此对局?',
      nzContent: '<b style="color: red;">不可恢复</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteGame(gameid),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  showGameRecord(gameid: any) {
    this.gameService.getRecord(gameid).subscribe((data) => {
      this.game = data;
      this.gr =  data.gamerecord ;
      this.gameid = gameid;
    });
    this.isVisible = true;
  }
  handleOk(gameid: string) {
    this.isVisible = false;
    console.log(this.gr);
    this.gr = this.gr.replace(/\+/g, '%2B');
    this.gameService.changeRecord(gameid, this.gr).subscribe((data) => {
    });
  }
  handleCancel() {
    this.isVisible = false;
  }
}

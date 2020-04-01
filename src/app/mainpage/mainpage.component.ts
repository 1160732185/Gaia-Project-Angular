import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../game.service';
import {Game} from '../Game';
import {Lobby} from '../Lobby';
import {NzModalService} from 'ng-zorro-antd';
import {IntervalMessage} from '../IntervalMessage';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  activegame: boolean;
  userid: string;
  isVisible = false;
  abc: string[];
  game: Game;
  gr: string;
  gameid: string;
  localStorage: object;
  private myGames: Lobby[];


  constructor(private gameService: GameService, private modalService: NzModalService) {
    this.myGames = [new Lobby()];
    this.activegame = true;
    this.userid = localStorage.getItem('current_user');
    this.showGames(this.userid);
    clearInterval(IntervalMessage.intervalMsg);
    IntervalMessage.intervalMsg = setInterval(() => {
      if (this.activegame) {
        this.showGames(this.userid);
      } else {this.showEndGames(this.userid); }
    }, 20000);
  }

  ngOnInit() {

  }

  showGames(player: string) {
    this.localStorage = localStorage;
    console.log('show games');
    this.gameService.showLobby(player)
      .subscribe((data) => {
        console.log(data);
        this.myGames = data;
      });
    if (this.myGames.length === 0 || this.myGames.length > 0 && this.myGames[0].bgcolor === '') {
      document.getElementById('icon').setAttribute('href', 'assets/panda.ico');
    } else {
      document.getElementById('icon').setAttribute('href', 'assets/redpanda.ico');
    }
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

  rollBack(gameid: any) {
    document.getElementById(gameid).style.display = 'none';
    this.gameService.rollBack(gameid)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  showActive() {
this.activegame = true;
this.showGames(localStorage.getItem('current_user'));
  }

  showEnd() {
    this.activegame = false;
    this.showEndGames(localStorage.getItem('current_user'));
  }

  private showEndGames(userid: string) {
    this.localStorage = localStorage;
    console.log('show games');
    this.gameService.showEndLobby(userid)
      .subscribe((data) => {
        console.log(data);
        this.myGames = data;
      });
  }
}

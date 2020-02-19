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
  isCollapsed = false;
  userid: string;
  isVisible = false;
  abc: string[];
  game: Game;
  gr: string;
  gameid: string;
  private myGames: Lobby[];
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private gameService: GameService, private modalService: NzModalService) {
  }

  ngOnInit() {
    this.abc = ['1111', '2222', '33333'];
    this.userid = localStorage.getItem('current_user');
    this.showGames(this.userid);
    IntervalMessage.intervalMsg = setInterval(() => {
      console.log('ssss');
      this.showGames(this.userid);
    }, 5000);
  }

  showGames(player: string) {
    console.log('show games');
    this.gameService.showLobby(player)
      .subscribe((data) => {
        console.log(data);
        this.myGames = data;
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

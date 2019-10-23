import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../game.service';
import {Game} from '../Game';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  isCollapsed = false ;
  userid: string;
  private myGames: string[];
  constructor(private gameService: GameService) { }

    ngOnInit() {
      this.userid = localStorage.getItem('current_user');
      this.showGames(this.userid);
  }

  showGames(player: string) {
    console.log('show games');
    this.gameService.showGames(player)
      .subscribe((data) => {console.log(data); this.myGames = data; });
  }

  deleteGame(gameid: string) {
    this.gameService.deleteGame(gameid)
      .subscribe(() => {this.ngOnInit(); });
  }
}

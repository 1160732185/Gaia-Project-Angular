import {Component, OnInit, Output} from '@angular/core';
import {Game} from './Game';
import {GameService} from './game.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userid = '请先登录';
  isCollapsed = false ;
  myGames: string[];
  title = 'Gaia-Project';
  constructor(private gameService: GameService, public router: Router) { }
  ngOnInit() {
    this.userid = localStorage.getItem('current_user');
    console.log('外层userid' + this.userid);
    this.showGames(this.userid);
  }

  showGames(player: string) {
    console.log('show games');
    this.gameService.showGames(player)
      .subscribe((data) => {console.log(data); this.myGames = data; });
  }

  navigate(s: any) {
    this.router.navigate(s);
  }
}

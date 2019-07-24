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
  currentgames: Game[];
  constructor(private gameService: GameService) { }

    ngOnInit() {
      console.log(this.userid );
      console.log(JSON.parse(localStorage.getItem('current_user')).userid );
      this.userid = JSON.parse(localStorage.getItem('current_user')).userid;
  }


}

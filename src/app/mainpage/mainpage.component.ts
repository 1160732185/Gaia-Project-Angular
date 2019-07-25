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
  userid: string[];
  useridd: any[5];
  constructor(private gameService: GameService) { }

    ngOnInit() {
      const a = 1;
      this.useridd[1] = 'a';
      console.log('useridd' + this.useridd);
      console.log(this.userid );
      console.log(JSON.parse(localStorage.getItem('current_user')).userid );
      this.userid = JSON.parse(localStorage.getItem('current_user')).userid;
  }


}

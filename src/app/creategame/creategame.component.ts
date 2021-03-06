import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GameService} from '../game.service';

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreategameComponent implements OnInit {
      gameinfo = new FormGroup({
      gameId: new FormControl(''),
      player1: new FormControl(''),
      player2: new FormControl(''),
      player3: new FormControl(''),
      player4: new FormControl(''),
      describe: new FormControl('')
});
  constructor(private gameService: GameService) { }
  createmessage: string;
  gamemode: string;
  gamebalance: string;
  ngOnInit() {
    console.log('pcand' + /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent));
    console.log(window.innerWidth);
  }

  onSubmit() {

  }

  createGame(gameId: string, player1: string, player2: string, player3: string, player4: string, gamemode: string, gamebalance: string, describe: string) {
    console.log(gamemode);
    this.gameService.createGame(gameId, player1, player2, player3, player4, gamemode, gamebalance, describe)
      .subscribe((data) => {console.log(data.body); this.createmessage = data.body.message; });
  }
}

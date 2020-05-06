import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IntervalMessage} from '../IntervalMessage';
import {PlayerDetails} from '../PlayerDetails';
import {GameService} from '../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerdetail: PlayerDetails;
  userid: string;
  constructor(private route: ActivatedRoute, private gameService: GameService) {
    this.playerdetail = new PlayerDetails();
    this.playerdetail.otherinfo = [ '', '', '', ''];
    this.route.paramMap.subscribe(params => {
   this.userid = params.get('userid');
    });
  }

  ngOnInit() {
    this.gameService.getPlayerDetail(this.userid)
      .subscribe((data) => {
        console.log('aaaaa' + data);
        this.playerdetail = data;
      });
  }

}

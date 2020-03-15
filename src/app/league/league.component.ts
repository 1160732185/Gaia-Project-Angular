import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {IntervalMessage} from '../IntervalMessage';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor(private gameService: GameService, private route: ActivatedRoute) {
    this.localStorage = localStorage;
    this.route.paramMap.subscribe(params => {
      this.leagueid = params.get('leagueid');
    });
    this.showLeague(this.leagueid);
  }
  localStorage: object;
  leagueid: string;
  leaguedetail: string[][];
  ngOnInit() {
  }

  private showLeague(leagueid: string) {
    this.gameService.showLeague(leagueid)
      .subscribe((data) => {
        this.leaguedetail = data;
        console.log('ld' + this.leaguedetail);
      });
  }
}

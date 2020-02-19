import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GameService} from '../game.service';
@Component({
  selector: 'app-raceinfo',
  templateUrl: './raceinfo.component.html',
  styleUrls: ['./raceinfo.component.css']
})
export class RaceinfoComponent implements OnInit {

  constructor(private gameService: GameService) { }
  top: string[][];
  ngOnInit() {
    this.getTop();
  }
  getTop() {
    console.log('toptop');
    this.gameService.getTop()
      .subscribe((data) => {console.log(data); this.top = data; });
  }
}

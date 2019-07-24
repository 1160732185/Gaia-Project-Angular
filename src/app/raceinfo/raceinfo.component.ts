import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raceinfo',
  templateUrl: './raceinfo.component.html',
  styleUrls: ['./raceinfo.component.css']
})
export class RaceinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'http://totoman.online/Home/About';
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isCollapsed = false ;
  userid: string;
  constructor() { }

  ngOnInit() {
    this.userid = JSON.parse(localStorage.getItem('current_user')).userid;
  }


}

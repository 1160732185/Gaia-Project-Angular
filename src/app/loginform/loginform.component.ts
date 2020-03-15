import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { User} from '../User';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {MessageBox} from '../MessageBox';
import {HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }
  public static message: string;
  showmessage: string;
  user: User;
  ngOnInit() {
    // tslint:disable-next-line:max-line-length
 /*   if (localStorage.getItem('current_user') != null && localStorage.getItem('current_user') !== 'null' && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
       this.router.navigate(['/mainpagemobile']);
    }*/
    // tslint:disable-next-line:max-line-length
 /*   if (localStorage.getItem('current_user') != null && localStorage.getItem('current_user') !== 'null' && !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.router.navigate(['/mainpage']);
    }*/
    if (localStorage.getItem('current_user') != null && localStorage.getItem('current_user') !== 'null') {
    this.router.navigate(['/mainpage']);
    }
  }

  showUser() {
    console.log(localStorage.getItem('current_user'));
  }

  userLogin(userid: string, userpassword: string): void {
    this.authService.userLogin(userid, userpassword).subscribe(
 (data) => {
   console.log(data);
   if (localStorage.getItem('current_user') != null && localStorage.getItem('current_user').length !== 4) {
     window.location.reload();
   }
   this.showmessage =  LoginformComponent.message;
 }
    );
  }

  signin(userid: string, userpassword: string) {
    this.authService.signin(userid, userpassword).subscribe(
      (data) => {
        this.showmessage = data.body.message;
      }
    );
  }
}

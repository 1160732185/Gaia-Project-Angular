import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { User} from '../user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  user: User;

  ngOnInit() {
  }

  showUser() {
    console.log(localStorage.getItem('current_user'));
  }

  userLogin(userid: string, userpassword: string): void {
    this.authService.userLogin(userid, userpassword).subscribe(
 (data) => {
   console.log(localStorage.getItem('current_user'));
   if (localStorage.getItem('current_user') != null && localStorage.getItem('current_user').length !== 4) {
     console.log(localStorage.getItem('current_user').length);
     this.router.navigate(['mainpage'], {}) ;
   }
 }
    );
  }
}

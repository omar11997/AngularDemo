import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/Services/user-authentication.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authService: UserAuthenticationService) {}

  ngOnInit() {
    //this.isUserLogged = this.authService.isUserLogged;
  }
  logIn() {
    this.authService.logIn('userName', 123);
    this.isUserLogged = this.authService.isUserLogged;
  }
  logOut() {
    this.authService.logOut();
    this.isUserLogged = this.authService.isUserLogged;
  }
}

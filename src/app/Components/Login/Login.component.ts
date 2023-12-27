import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/Services/user-authentication.service';
import {  Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  isUserLogged: boolean ;
  constructor(private authService: UserAuthenticationService,private router: Router,private location : Location) {
    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit() {
    //this.isUserLogged = this.authService.isUserLogged;
    console.log(this.isUserLogged);
  }
  logIn() {
    ////call the service and send its paramters
    this.authService.logIn('userName', 123);
    /// set the isUserLogged property 
    this.isUserLogged = this.authService.isUserLogged;
    ////Redirect to order
    this.router.navigate(['/order']);
    ///Redirect to back step
    //this.location.back();

    
  }
  logOut() {
    this.authService.logOut();
    this.isUserLogged = this.authService.isUserLogged;
  }
}

import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/Services/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authSerive: UserAuthenticationService) {}
  ngOnInit(): void {
    ///this.isUserLogged = this.authSerive.isUserLogged;
    this.authSerive.isUserLoggedSubject().subscribe((status) => {
      this.isUserLogged = status;
    });
  }
}

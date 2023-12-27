import { Injectable, booleanAttribute } from '@angular/core';
import { Route } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  logIn(userName: string, passwaor: number) {
    ///call login api , and get access Token
    let userToken = '123456789';
    localStorage.setItem('token', userToken);
    this.isLoggedSubject.next(true);
    
  }
  logOut() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }
  get isUserLogged(): boolean {
    // if (localStorage.getItem('token')) return true;
    // return false;

    return (localStorage.getItem('token')) ? true : false;
  }
  isUserLoggedSubject(): Observable<boolean> {
    ////Indicate that the subject will return as observable only
    return this.isLoggedSubject.asObservable();
  }
}

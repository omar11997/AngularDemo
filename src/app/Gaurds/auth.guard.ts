import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from '../Services/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
///////this function is depricated but we make it to match the model 
export class AuthGuard implements CanActivate {
  constructor(private authService :UserAuthenticationService , private router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return false;
    if(this.authService.isUserLogged){
      return true;
    }else{
      alert("you must Log In First");
      this.router.navigate(["/Login"])
      return false;
    }
    
  }
  
}

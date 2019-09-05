import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router){}

  canActivate() : boolean {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated() : boolean{
    return true;
  }

  public login(postData) {
    //loginAPI connexion
  }
  
  public signup(postData) {
    //loginAPI connexion
  }
  
  public logout(postData) {
    //loginAPI connexion
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated() : boolean{
    const userData = sessionStorage.getItem('userData');
    if(userData && userData.length > 0){
      return true;
    }
    return false;
  }

  public async login(postData) {
    //loginAPI connexion
    const responseData = {
      name: "Youness CHAFIA",
      id: "1234",
      token: "FR78541CVR5H5"
    }
    await sessionStorage.setItem('userData', JSON.stringify(responseData));
    return true;
  }

  public async getUserData(){
    const userData = await sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }
  
  public signup(postData) {
    //loginAPI connexion
  }
  
  public async logout() {
    //loginAPI connexion
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
}

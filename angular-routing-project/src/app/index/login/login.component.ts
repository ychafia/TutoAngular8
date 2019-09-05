import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  postData = {
    email: '',
    password: ''
  };
  public errorText: string;
  constructor(public authService: AuthService, public router: Router) { 
    this.errorText = "";
  }

  loginAction() {
    if(this.postData.email && this.postData.password){
      this.errorText = "";
      //API action and Storage session
      if(this.authService.login(this.postData)){
        this.router.navigate(['dashboard']);
      } else {
        this.errorText = "login/password incorrect !"
      }
    } else {
      this.errorText = "Put valid data !!"
    }
  }

  ngOnInit() {
  }

}

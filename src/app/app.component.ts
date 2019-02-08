import { Component } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from './models/User';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(public requestService: RequestService, private router: Router, private authService: AuthService) {}
  
  
  signUp(signUpForm: NgForm){
    var userSignUp: User = signUpForm.value;
    console.log("SignUp-Input:");
    console.log(userSignUp);
    
    this.requestService.post("user/signup", userSignUp).subscribe(res => {
      this.authService.setSession(res.success.token);
      signUpForm.reset();
      console.log(res);
    }, err => {
      // signUpForm.reset();
      console.log(err);
    });
  }


  login(loginForm: NgForm){
    var userCredentials = loginForm.value;
    
    console.log("Login-Input:");
    console.log(userCredentials);
    
    this.requestService.post("user/login", userCredentials).subscribe(res => {
      this.authService.setSession(res.success.token);
      loginForm.reset();
      console.log(res);
    }, err => {
      // loginForm.reset();
      console.log(err);
    });
  }
 }

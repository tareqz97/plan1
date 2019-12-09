import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {error} from "util";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){

    }else{
      this.authService.signUp(email,password).subscribe(resData =>{
          console.log(resData);
          this.isLoading = false;
        },
        error =>{
          console.log(error)
        });

      // this.authService.signUp(email,password);
    }
    form.reset();
  }

}

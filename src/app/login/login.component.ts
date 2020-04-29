import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username=="Admin" && this.password=="Admin"){
      console.log("Welcome");
      this._router.navigate(['/success']);
    }
    else{
      console.log("Incorrect Username or Password");
      this._router.navigate(['/error']);
    }
    console.log("function ending");
  }

 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./css/login.component.css','./css/mobile.login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logining(login:string, password:string){
    if(login=="admin" && password=="admin"){
      localStorage.setItem("role","admin")
    }
    if(login=="user" && password=="user"){
      localStorage.setItem("role","user")
    }
    
  }
}

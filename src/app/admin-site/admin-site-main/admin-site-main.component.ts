import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-site-main',
  templateUrl: './admin-site-main.component.html',
  styleUrls: ['./admin-site-main.component.css']
})
export class AdminSiteMainComponent implements OnInit {

  isLogined=false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isLogined=true;
    }
  }

}

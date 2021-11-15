import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-site-main',
  templateUrl: './admin-site-main.component.html',
  styleUrls: ['./admin-site-main.component.css']
})
export class AdminSiteMainComponent implements OnInit {

  isLogined=false;
  role="";

  constructor() { }

  ngOnInit(): void {
    let buf=localStorage.getItem("role");
    if(buf!=null){
      this.isLogined=true;
      this.role=buf;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./css/header-admin.component.css','./css/mobile.header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  needAddDialog=false
  isAdmin=false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("role")){
      if(localStorage.getItem("role")=="admin"){
        this.isAdmin=true;
      }
      else{
        this.isAdmin=false
      }
    }
  }
  unloggining(){
    localStorage.removeItem("role")
    window.location.reload();
  }
  showAddDialog(){
    this.needAddDialog=true;
    document.getElementsByTagName("body")[0].className="notScrolling"
  }

  hideAddDialog(){
    this.needAddDialog=false;
    document.getElementsByTagName("body")[0].className=""
  }
}

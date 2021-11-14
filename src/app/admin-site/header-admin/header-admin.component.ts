import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./css/header-admin.component.css','./css/mobile.header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  needAddDialog=false

  constructor() { }

  ngOnInit(): void {
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

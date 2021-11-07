import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./css/header.component.css', './css/mobile.header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars=faBars;
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  showPanel(){
    document.getElementsByClassName("leftPanel")[0].className="leftPanel show";
    document.getElementsByClassName("panelButtons")[0].className="text panelButtons";
  }
  hidePanel(){
    document.getElementsByClassName("leftPanel")[0].className="leftPanel hide";
    document.getElementsByClassName("panelButtons")[0].className="text panelButtons hidenButtons";
  }
}

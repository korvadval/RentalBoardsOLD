import { Component, OnInit } from '@angular/core';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./css/header.component.css', './css/mobile.header.component.css'],
  animations: [
    trigger('openClosePanel', [
      state('open', style({
        width: '100%',
        opacity: 1,
      })),
      state('closed', style({
        width: '0px',
        opacity: 0,
      })),
      transition('open <=> closed', [
        animate('0.4s')
      ]),
    ]),

    trigger('compressIconPhone', [
      state('big', style({
        opacity: 1,
      })),
      state('small', style({
        opacity: 0.6,
      })),
      transition('big <=> small', [
        animate('1.2s')
      ]),
    ])
  ],
})
export class HeaderComponent implements OnInit {
  faBars=faBars;
  faTimes=faTimes;
  faPhone=faPhone;

  isPanelOpen=false;
  isIconBig=false;

  constructor() { }

  ngOnInit(): void {
    
  }

  compressAnimDone(){
    this.isIconBig=!this.isIconBig;
  }

  showPanel(){
    this.isPanelOpen=true;
  }
  hidePanel(){
    this.isPanelOpen=false;
  }
}

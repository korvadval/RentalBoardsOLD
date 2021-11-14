import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faUserFriends, faUserCheck,
         faSmile, faCogs, faHandHoldingUsd, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
         
@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./css/advantages.component.css', './css/mobile.advantages.component.css']
})
export class AdvantagesComponent implements OnInit {
  faShoppingCart=faShoppingCart;

  faUserFriends=faUserFriends;
  faUserCheck=faUserCheck;

  faSmile=faSmile;
  faCogs=faCogs;
  
  faHandHoldingUsd=faHandHoldingUsd;
  faMoneyBillAlt=faMoneyBillAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

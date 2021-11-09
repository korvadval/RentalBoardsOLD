import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./css/discounts.component.css', "./css/mobile.discounts.component.css"]
})
export class DiscountsComponent implements OnInit {
  needDialog=false;

  currentDisc={id:0, description:"", img:""}

  discountsList = [
    {id:0, description:"первая скидка", img:"../assets/images/discount6.jpg"},
    {id:1, description:"вторая скидка", img:"../assets/images/discount6.jpg"},
    {id:2, description:"третья скидка", img:"../assets/images/discount6.jpg"},
    {id:3, description:"четвертая скидка", img:"../assets/images/discount6.jpg"},
    {id:4, description:"\_( 0,0)_/", img:"../assets/images/discount6.jpg"},
    {id:5, description:"шестая скидка", img:"../assets/images/discount6.jpg"},
    {id:6, description:"хуй", img:"../assets/images/discount6.jpg"},
    {id:7, description:"ыыыыыыыыыыы", img:"../assets/images/discount6.jpg"},
  ];

  constructor() { }

  ngOnInit(): void {
    this.needDialog=false;
  }

  showDialog(id:number){
    this.currentDisc=this.discountsList[id];
    this.needDialog=true;
  }
  hideDialog(e:any){
    this.needDialog=false;
  }
}

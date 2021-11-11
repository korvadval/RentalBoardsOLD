import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./css/gallery.component.css','./css/mobile.gallery.component.css'],
  animations: [
    trigger('swipeAnim', [
      transition(':increment', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':decrement', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ]),
  ],
})
export class GalleryComponent implements OnInit {
  faAngleLeft=faAngleLeft;
  faAngleRight=faAngleRight;
  curPhoto=2;

  constructor() { }

  ngOnInit(): void {
  }

  //change curPhoto on +1/-1
  swipePhoto(side:number){
    this.curPhoto+=side;
    if(this.curPhoto>6){
      this.curPhoto=1;
    }
    if(this.curPhoto<1){
      this.curPhoto=6;
    }
  }

}

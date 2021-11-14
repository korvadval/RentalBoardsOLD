import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dialog-add-client',
  templateUrl: './dialog-add-client.component.html',
  styleUrls: ['./css/dialog-add-client.component.css','./css/mobile.dialog-add-client.component.css'],
  animations: [
    trigger('fadeInOutAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class DialogAddClientComponent implements OnInit {
  @HostBinding('@fadeInOutAnim') a=1;
  
  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit, EventEmitter, Output, Input, HostBinding , } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal-dialog-window',
  templateUrl: './modal-dialog-window.component.html',
  styleUrls: ['./css/modal-dialog-window.component.css', './css/mobile.modal-dialog-window.component.css'],
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
export class ModalDialogWindowComponent implements OnInit {
  @HostBinding('@fadeInOutAnim')
  @Input() img: string = "";
  @Input() description: string = "";
  
  constructor() { }

  ngOnInit(): void { 
  }
  
  stopPropagationHandler(event:any){
    event.stopPropagation();
  }

  @Output() onChanged = new EventEmitter<boolean>();
  async hideDialog() {   
    this.onChanged.emit(false);
  }
}

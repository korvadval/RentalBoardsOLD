import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog-window',
  templateUrl: './modal-dialog-window.component.html',
  styleUrls: ['./css/modal-dialog-window.component.css', './css/mobile.modal-dialog-window.component.css']
})
export class ModalDialogWindowComponent implements OnInit {

  @Input() img: string = "";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  stopPropagationHandler(event:any){
    event.stopPropagation();
  }

  @Output() onChanged = new EventEmitter<boolean>();
  hideDialog() {
      this.onChanged.emit(false);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogWindowComponent } from './modal-dialog-window.component';

describe('ModalDialogWindowComponent', () => {
  let component: ModalDialogWindowComponent;
  let fixture: ComponentFixture<ModalDialogWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDialogWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

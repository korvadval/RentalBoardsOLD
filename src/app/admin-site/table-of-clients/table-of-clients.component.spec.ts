import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfClientsComponent } from './table-of-clients.component';

describe('TableOfClientsComponent', () => {
  let component: TableOfClientsComponent;
  let fixture: ComponentFixture<TableOfClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

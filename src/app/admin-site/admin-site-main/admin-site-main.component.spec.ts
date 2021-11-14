import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteMainComponent } from './admin-site-main.component';

describe('AdminSiteMainComponent', () => {
  let component: AdminSiteMainComponent;
  let fixture: ComponentFixture<AdminSiteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSiteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

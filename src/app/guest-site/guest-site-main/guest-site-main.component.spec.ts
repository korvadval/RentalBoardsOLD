import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSiteMainComponent } from './guest-site-main.component';

describe('GuestSiteMainComponent', () => {
  let component: GuestSiteMainComponent;
  let fixture: ComponentFixture<GuestSiteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSiteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSiteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

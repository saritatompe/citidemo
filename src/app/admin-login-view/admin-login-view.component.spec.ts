import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginViewComponent } from './admin-login-view.component';

describe('AdminLoginViewComponent', () => {
  let component: AdminLoginViewComponent;
  let fixture: ComponentFixture<AdminLoginViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

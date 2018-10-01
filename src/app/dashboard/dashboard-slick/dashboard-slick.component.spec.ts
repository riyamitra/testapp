import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSlickComponent } from './dashboard-slick.component';

describe('DashboardSlickComponent', () => {
  let component: DashboardSlickComponent;
  let fixture: ComponentFixture<DashboardSlickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSlickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

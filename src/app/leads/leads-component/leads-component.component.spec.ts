import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsComponentComponent } from './leads-component.component';

describe('LeadsComponentComponent', () => {
  let component: LeadsComponentComponent;
  let fixture: ComponentFixture<LeadsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

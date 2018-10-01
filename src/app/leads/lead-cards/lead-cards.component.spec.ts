import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCardsComponent } from './lead-cards.component';

describe('LeadCardsComponent', () => {
  let component: LeadCardsComponent;
  let fixture: ComponentFixture<LeadCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

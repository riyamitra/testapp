import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewcomponentComponent } from './treeviewcomponent.component';

describe('TreeviewcomponentComponent', () => {
  let component: TreeviewcomponentComponent;
  let fixture: ComponentFixture<TreeviewcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeviewcomponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

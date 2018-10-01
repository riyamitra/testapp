import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsExpandedComponent } from './products-expanded.component';

describe('ProductsExpandedComponent', () => {
  let component: ProductsExpandedComponent;
  let fixture: ComponentFixture<ProductsExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSwitchcaseComponent } from './product-switchcase.component';

describe('ProductSwitchcaseComponent', () => {
  let component: ProductSwitchcaseComponent;
  let fixture: ComponentFixture<ProductSwitchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSwitchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

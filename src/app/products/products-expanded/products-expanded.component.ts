import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../pojo/product';

@Component({
  selector: 'app-products-expanded',
  templateUrl: './products-expanded.component.html',
  styleUrls: ['./products-expanded.component.css']
})
export class ProductsExpandedComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

  isExpanded() {
    if (this.product.expanded === true)
      this.product.expanded = false;
    else
      this.product.expanded = true;
  }

}

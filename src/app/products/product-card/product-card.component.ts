import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../pojo/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() openModel = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {

    // this.product.expanded = false;
  }

  isExpanded() {
    if (this.product.expanded === true)
      this.product.expanded = false;
    else
      this.product.expanded = true;
  }

  openInModel() {
    this.openModel.emit(this.product);
  }
}

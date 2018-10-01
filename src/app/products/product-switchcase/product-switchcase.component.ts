import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../pojo/product';

@Component({
  selector: 'app-product-switchcase',
  templateUrl: './product-switchcase.component.html',
  styleUrls: ['./product-switchcase.component.css']
})
export class ProductSwitchcaseComponent implements OnInit {
  @Input() assets
  constructor() { }

  ngOnInit() {
  }

}

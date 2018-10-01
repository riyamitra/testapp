import { Component, OnInit } from '@angular/core';
import { Product } from '../pojo/product';
import { ProductService } from '../service/product.service';
import { Dropdown } from '../pojo/dropdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';


@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  products: Array<Product>
  dropdown: Array<Dropdown>;
  modalData: Array<Dropdown>;
  selectedProduct = -1

  constructor(private productService: ProductService, private modalService: NgbModal) {
    this.productService.getProducts().subscribe(resp => {
      console.log(resp.response);
      this.products = resp.response.products;
      console.log(this.products);
      for (let p of this.products) {
        p.expanded = false
      }

    })

    this.productService.getDropdown().subscribe(resp => {
      console.log(resp.response);
      this.dropdown = resp.response;
    })
  }


  ngOnInit() { }

  open() {
    const modalRef = this.modalService.open(ProductModalComponent, { size: 'lg' });


  }

  opens(event) {
    const modalRef = this.modalService.open(ProductModalComponent, { size: 'lg' });
    modalRef.componentInstance.product = event;
  }

}

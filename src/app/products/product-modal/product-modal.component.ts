import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../pojo/product';
import { Assesst } from '../pojo/assesst';
import { Signal } from '../pojo/signal';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() product: Product;
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  name;
  description;
  image;
  http: any;


  ngOnInit() {
    if (!this.product) {
      this.product = new Product();
      this.product.assests = new Array<Assesst>();
      this.product.assests.push(new Assesst());
      this.product.signals = new Array<Signal>();
      this.product.signals.push(new Signal());
    }

  }

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    let files = [];
    let formdata = new FormData();

    formdata.append("name", this.product.name);
    formdata.append("description", this.product.description);

    if (this.product.assests.length > 0) {
      for (let asset of this.product.assests) {
        formdata.append("file", asset.assestFile, asset.assestName);
      }
    }

    this.http.post(formdata).subscribe(
      data => {
        console.log(formdata);
        setTimeout(() => {
          this.isCompleted = true;
        }, 1000);
      },
    )
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }

  constructor() { }

  getFile(event) {
    console.log(event);
    console.log(event.target.files[0]);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  getDocuments() {
    this.product.assests.push(new Assesst());

    setTimeout(() => {
      try {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      } catch (err) { }
    }, 100);
  }

  deleteDocuments(asset) {
    this.product.assests = this.product.assests.filter(
      temp => temp.assestName !== asset.assestName);
  }

  getFileName(event, asset) {
    console.log(event);
    asset.assestName = event.target.files[0].name;
    asset.assestFile = event.target.files[0];
    console.log(asset);
  }

  addSignal() {
    this.product.signals.push(new Signal());
  }

  deleteSignal(signal) {
    this.product.signals = this.product.signals.filter(
      temp => temp.script !== signal.script);
  }
}

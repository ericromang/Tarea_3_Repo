import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService : ProductService) {
  this.products = this.productService.products;
  
  }

  ngOnInit() {
  }

  share(){
    alert("El producto se compartio");
  }

  onNotify(){
    alert("Notificación de producto");
  }
}

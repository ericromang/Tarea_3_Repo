import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "../product.service"

import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  products;
  product;
  constructor(private route: ActivatedRoute, 
    private cartService: CartService, private productService : ProductService) {
      this.products = this.productService.products;
   
}
    
  ngOnInit() {
    this.route.paramMap.subscribe(
      params =>{
        
      this.product = this.products[+params.get('productId')];
  
      }
    );
}

  addToCart(product){
    this.cartService.addToCart(product);
    alert("Se añadio al carrito "+JSON.stringify(this.cartService.getItems()));
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from 'src/Interfaces/Interfaces';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { productslist } from 'src/app/services/productservices/ProductList';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class ProductDetailComponent implements OnInit {
   productId!:string;
   product!: Product;
   products:Product[]=productslist

   constructor(private route:ActivatedRoute,private cartService:CartService){

   }



  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.productId=param['id']
      this.product=this.products.find(p=>p.id == this.productId)!
      console.log(this.product)
    })
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}

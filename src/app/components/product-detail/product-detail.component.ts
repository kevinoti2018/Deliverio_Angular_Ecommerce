import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product, ProductSuccess } from 'src/Interfaces/Interfaces';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { ProductsService } from 'src/app/services/productservices/products.service';
import { selectAllProducts } from '../store/selectors/products.selector';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class ProductDetailComponent implements OnInit {
   product!: any;

   constructor(private route:ActivatedRoute,private cartService:CartService,private productservice:ProductsService, private store:Store,public  authservice:AuthService, private router:Router){
      this.authservice= authservice
   }



  ngOnInit(): void {
    this.authservice.isAdmin()
    this.route.params.subscribe((param)=>{
       this.store.select(selectAllProducts).subscribe((products)=>{
        console.log(products)
          this.product=products.find(p=>p.id == param['id'])
          console.log(this.product)
       })

      // this.productservice.getsingleproduct(this.productId).subscribe((product:Product)=>{
      //   this.product=product;
      //   console.log(this.product)})
    })
  }
  
  addToCart(productId: string): void {
    this.cartService.addToCart(productId).subscribe(()=>{
      console.log("added to cart")
    },
    (error)=>{
      console.log(error.message)
    }
    )
  }

  deleteProduct(id: string): void {
    this.productservice.Deleteproduct(id).subscribe(
      (response: ProductSuccess) => {
        // Handle successful deletion
        console.log('Product deleted successfully!');
        this.router.navigateByUrl('')
      },
      (error) => {
        // Handle error
        console.error('Error deleting product:', error);
      }
    );
  }
}

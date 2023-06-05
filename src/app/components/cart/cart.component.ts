import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CART, Product } from 'src/Interfaces/Interfaces';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/services/productservices/products.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  cartItems!: CART[];
  products: Product[] = [];
  Subtotal:number=0;
  cartTotal: number = 0;
  cartid!:number;

  cart:any[]=[]

  constructor(private cartService: CartService,private router:Router,private productService:ProductsService) { }
    
  ngOnInit(): void {
    
    this.productService.getallproducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error) => {
        console.error(error);
      }
    );


    this.cartService.viewCart().subscribe(
      (data: CART[]) => {
        this.cartItems = data;
        console.log(this.cartItems)
      
        // Extract product information based on product_id
        this.cartItems.forEach((cartItem) => {
          const product = this.products.find((p) => p.id === cartItem.product_id);
          if (product) {
            cartItem.product = product;
            console.log(product)
          }
        });
        // this.cartTotal = this.cartItems.reduce((acc, cartItem) => acc + cartItem.subtotal, 0);
        // console.log(this.cartTotal)

      },
      (error) => {
        console.error(error);
      }
    );
  }
  



  addToCart(productId: string): void {
    this.cartService.addToCart(productId)
  }

  // addToCart(productId: string): void {
  //   this.cartService.addToCart(productId).subscribe(()=>{
  //     console.log('product added in cart')
  //   },
  //   (error)=>{
  //     console.log(error)
  //     }
  //   )
 

  // }
  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartTotal = this.cartService.getCartTotal();
  }
  
  clearCart(): void {
    // Clear the cart items
    this.cartService.clearCart();
    this.cartItems = [];
    this.cartTotal = 0;
  }

  // goToOrderForm(cartId: number): void {
  //   this.router.navigate(['/checkout', cartId ]);
  // }
  goToOrderForm(): void {
    const cartId: number = this.cartService.generateCartId();
    this.router.navigate(['/checkout', cartId]);
  }

  
  

    
}



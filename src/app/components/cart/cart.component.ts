import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, Product } from 'src/Interfaces/Interfaces';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];
  cartTotal: number = 0;
  cartid!:number;

  constructor(private cartService: CartService,private router:Router) { }
    

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
  }
  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
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
    const cartId: number = this.cartService.generateCartId(); // Get the cartId dynamically from the cart service
    this.router.navigate(['/checkout', cartId]);
  }

  
  

    
}

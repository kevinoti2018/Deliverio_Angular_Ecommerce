import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CART, Order, Product } from 'src/Interfaces/Interfaces';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { OrderService } from 'src/app/services/orderservice/order.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  standalone:true,
  imports: [
    CommonModule,
    FormsModule
  ]
})


export class OrderComponent implements OnInit {
  cartItems!: CART[];
  products: Product[] = [];
  cartTotal: number = 0;
  cartid!:number;


  orders: Order[] = [];
  firstName!: string;
  county!: string;
  city!: string;
  address!: string;
  lastName!: string;
  email!:string;

  constructor(private orderService: OrderService, private cartService:CartService) {}
  
  ngOnInit(): void {
     this.cartService.viewCart().subscribe(
      (data: CART[]) => {
        this.cartItems = data;
      
        // Extract product information based on product_id
        this.cartItems.forEach((cartItem) => {
          const product = this.products.find((p) => p.id === cartItem.product_id);
          if (product) {
            cartItem.product = product;
          }
        });
        this.cartTotal = this.cartItems.reduce((acc, cartItem) => acc + cartItem.subtotal, 0);
        console.log(this.cartTotal)

      },
      (error) => {
        console.error(error);
      }
    );
  }

   
  placeOrder(): void {
    const order: Order = {
      orderId: Math.floor(Math.random() * 100),
      items: this.cartService.getCartItems(),
      firstName: this.firstName,
      lastName: this.lastName,
      county: this.county,
      city: this.city,
      shippingAddress: this.address,
      email: this.email
    };


    this.orderService.placeOrder(order);
    console.log(order)
    this.cartService.clearCart();
  }
  

  getOrders(): void {
    this.orders = this.orderService.getOrders();
  }

  clearOrders(): void {
    this.orderService.clearOrders();
    this.orders = [];
  }

  calculateCartTotal() {
    this.cartTotal = this.cartService.getCartTotal(); 
  }
}

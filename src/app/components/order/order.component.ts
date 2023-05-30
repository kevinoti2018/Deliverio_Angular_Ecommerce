import { Component, OnInit } from '@angular/core';
import { Order } from 'src/Interfaces/Interfaces';
import { CartService } from 'src/app/services/cartservice/cart.service';
import { OrderService } from 'src/app/services/orderservice/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  cartTotal:number=0;
  firstName!: string;
  county!: string;
  city!: string;
  address!: string;
  lastName!: string;
  email!:string;

  constructor(private orderService: OrderService, private cartService:CartService) {}
  
  ngOnInit(): void {
    this.calculateCartTotal();
  }

   
  placeOrder(): void {
    const order: Order = {
      orderId: Math.floor(Math.random() + 1),
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

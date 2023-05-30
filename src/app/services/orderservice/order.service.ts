import { Injectable } from '@angular/core';
import { Order } from 'src/Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  constructor() { }
 

  placeOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  clearOrders(): void {
    this.orders = [];
  }
}

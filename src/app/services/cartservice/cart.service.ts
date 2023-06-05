import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CART, Product } from 'src/Interfaces/Interfaces';
import { addToCart } from 'src/app/components/store/actions/products.action';
// Update the import path

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CART[] = [];
  private cartTotal: number = 0;
  private cartid!: number;

  private carturl='http://localhost:5000/cart'

  constructor(private http:HttpClient,private store:Store) {}
 
  //Adds Product Into Cart
  // addToCart(productId:string):Observable<CART>{
  //   let payload={productId}
  //   return this.http.post<CART>(`${this.carturl}/add_to_cart/${productId}`, payload);
  // }

  // addToCart(productId:string){
  //  this.store.dispatch(addToCart({product_id:productId}))
  // }
  
   addToCart(productId:string):Observable<CART>{
    let payload={productId}
    return this.http.post<CART>(`${this.carturl}/add_to_cart/${productId}`,payload);
  }
 
  viewCart(): Observable<CART[]> {
    return this.http.get<CART[]>(`${this.carturl}/view_cart`);
  }
  



  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);

    if (index !== -1) {
      const item = this.cartItems[index];
      if (item.quantity > 1) {
        // If quantity is greater than 1, decrease the quantity
        item.quantity--;
      } else {
        // If quantity is 1, remove the item from the cart
        this.cartItems.splice(index, 1);
      }
    }

    // this.updateCartTotal();
  }
  
 

  getCartItems(): CART[] {
    return this.cartItems;
  }

  getCartTotal(): number {
    return this.cartTotal;
  }
  
  // private calculateSubtotal(cartItem: CART): number {
  //   return cartItem.product.price * cartItem.quantity;
  // }

  // private updateCartTotal(): void {
  //   let total = 0;
  //   for (const cartItem of this.cartItems) {
  //     const subtotal = this.calculateSubtotal(cartItem);
  //     total += subtotal;
  //   }
  //   this.cartTotal = total;
  // }
  generateCartId(){
    this.cartid=Math.floor(Math.random()+1)
    return this.cartid
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartTotal = 0;
  }
}

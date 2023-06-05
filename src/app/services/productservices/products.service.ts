import { Injectable } from '@angular/core';
import { CART, Product, ProductSuccess } from 'src/Interfaces/Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetProducts } from 'src/app/components/store/actions/products.action';
import { Store } from '@ngrx/store';
import { ProductsState } from 'src/app/components/store/reducers/products.reducer';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseurl = 'http://localhost:5000/products';
  private carturl = 'http://localhost:5000/cart';
  products: Product[] = [];
  constructor(private http: HttpClient,private store:Store<ProductsState>) { }

  getallproducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseurl}/getproducts`);
   
  }

  getsingleproduct(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseurl}/getproduct/${productId}`);
  }

  AddToCart(productId:string):Observable<CART>{
    let payload={productId}
    return this.http.post<CART>(`${this.carturl}/add_to_cart/${productId}`,payload);
  }


  getProductsByCategory(categoryId: string): Observable<Product[]> {
    const url = `${this.baseurl}/getcategory/${categoryId}`;
    return this.http.get<Product[]>(url);
  }
  
AddproductComponent(newProduct:Product):Observable<Product>{
   return this.http.post<Product>(`${this.baseurl}/addproduct`,newProduct)

}
DeleteproductComponent(id:string):Observable<ProductSuccess>{
   return this.http.delete<ProductSuccess>(`${this.baseurl}/addproduct/${id}`)

}



}



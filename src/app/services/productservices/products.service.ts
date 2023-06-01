import { Injectable } from '@angular/core';
import { Product } from 'src/Interfaces/Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseurl = 'http://localhost:5000/products';
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getallproducts() {
    return this.http.get<Product[]>(`${this.baseurl}/getproducts`);
  }

  getsingleproduct(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseurl}/getproduct/${productId}`);
  }
}


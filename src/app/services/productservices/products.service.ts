import { Injectable } from '@angular/core';
import { Product } from 'src/Interfaces/Interfaces';
import { productslist } from './ProductList';

@Injectable({
  providedIn: 'root'
})

export class ProductsService{

  products:Product[]=productslist
  constructor() { }

  getallproducts(){
    return this.products.slice(0,5)
  }
}

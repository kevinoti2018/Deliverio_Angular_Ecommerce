import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from 'src/Interfaces/Interfaces';
import { ProductsService } from 'src/app/services/productservices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule,RouterModule]
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]
  constructor(private productservice:ProductsService){

  }
  ngOnInit(): void {
      this.products=this.productservice.getallproducts()
      console.log(this.products)
  }
}



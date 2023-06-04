import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/Interfaces/Interfaces';
import { ProductsService } from 'src/app/services/productservices/products.service';
import { ProductsState } from '../store/reducers/products.reducer';
import { GetProducts } from '../store/actions/products.action';
import { Observable } from 'rxjs';
import { selectAllProducts } from '../store/selectors/products.selector';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule,RouterModule]
})
export class ProductsComponent implements OnInit {

  products!: Observable<Product[]>;
  constructor(private productservice:ProductsService,private store:Store<AppState>){

  }

  public products$ =this.store.select(selectAllProducts)
  ngOnInit(): void {
    this.store.dispatch(GetProducts());
  }
}



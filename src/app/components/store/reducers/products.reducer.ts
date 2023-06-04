import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/Interfaces/Interfaces';
import {
  GetProductFailure,
  GetProductSuccess,
  GetProducts,
  GetSingleProduct,
  GetSingleProductFailure,
  GetSingleProductSuccess,
} from '../actions/products.action';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: any;
}


const initialstate: ProductsState = {
  products: [],
  loading: false,
  error: null,
};


export const productreducer = createReducer(
  initialstate,
  on(GetProducts, (state) => ({ ...state, loading: true })),
  on(GetProductSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null,
  })),
  on(GetProductFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),



  
  on(GetSingleProduct, (state) => ({ ...state, loading: true, error: null })),
  on(GetSingleProductSuccess, (state, { product }) => ({
    ...state,
    product,
    loading: false,
  })),
  on(GetSingleProductFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

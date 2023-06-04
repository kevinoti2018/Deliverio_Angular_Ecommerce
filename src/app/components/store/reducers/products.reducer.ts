import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/Interfaces/Interfaces';
import {
  GetProductFailure,
  GetProductSuccess,
  GetProducts,
  addToCart,
  addToCartFailure,
  addToCartSuccess
} from '../actions/products.action';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: any;
  addToCartSuccess:string,
  addToCartFailure:'',

}

export interface CartStateInterface{
  cart:[];
  loading: boolean;
  error: any;
}

const initialstate: ProductsState = {
  products: [],
  loading: false,
  error: null,
  addToCartSuccess:'',
  addToCartFailure:'',

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



      //add to cart
      on(addToCart,(state,{product_id})=>({
        ...state,
        isLoading:true,
        p_id:product_id
    })),
    on(addToCartSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        error:null,
        addToCartSuccess:action.message
    })),
    on(addToCartFailure,(state, {error})=>({
        ...state,
        isLoading:false,
        error:error,
    })),
);

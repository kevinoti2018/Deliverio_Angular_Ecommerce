import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartStateInterface, ProductsState } from "../reducers/products.reducer";
import { AppState } from "../state/app.state";
import { Product } from "src/Interfaces/Interfaces";


export const selectedProducts = createFeatureSelector<ProductsState>('products');
export const selectCart =(state:AppState)=>state.cart






export const selectAllProducts=createSelector(
    selectedProducts,(state:ProductsState)=>state.products.slice(1,6)
);

export const selectCartItems = createSelector(
    selectCart,
    (state:CartStateInterface)=> state.cart
)
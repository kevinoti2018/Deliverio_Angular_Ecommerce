import { createSelector } from "@ngrx/store";
import { ProductsState } from "../reducers/products.reducer";
import { AppState } from "../state/app.state";
import { Product } from "src/Interfaces/Interfaces";






export const selectedProducts=(state:AppState)=>state.products

export const selectAllProducts=createSelector(
    selectedProducts,(state:ProductsState)=>state.products
);
export const selectSingleProduct = createSelector(
    selectAllProducts,
    (products: Product[], productId: string) =>
      products.find((product) => product.id === productId)
  );
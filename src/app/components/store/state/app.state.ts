import { CartStateInterface, ProductsState } from "../reducers/products.reducer";


export interface AppState{
    products:ProductsState
    cart:CartStateInterface
}
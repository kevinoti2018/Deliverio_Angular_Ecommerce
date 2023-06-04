import { createAction, props } from "@ngrx/store"
import { CART, Product } from "src/Interfaces/Interfaces"


export const GetProducts=createAction('[Product] get products')

export const GetProductSuccess=createAction('[Product] get products success',props<{products:Product[]}>());
export const GetProductFailure=createAction('[Product] get products failure',props<{error:any}>());


//Add To Cart
export const addToCart= createAction('[Products] Add To Cart',
props<{product_id:string}>())
export const addToCartSuccess= createAction('[Products API] Add to Cart Success', 
props<{message:string}>())
export const addToCartFailure= createAction('[Products API] Add to Cart Failure', 
props<{error:string}>())

//get cart
export const loadCart= createAction('[Cart] Get Cart')
export const loadCartSuccess= createAction('[Cart API] Cart Load Success', 
props<{cart:CART[]}>())
export const loadCartFailure= createAction('[Cart API] Cart Load Failure', 
props<{error:string}>())

//increase count of item in cart
export const increaseCount = createAction('[Cart] Increase Count',
props<{cart_id:string}>())
export const increaseCountSuccess= createAction('[Cart API] Increase Count Success', 
props<{message:string}>())
export const increaseCountFailure= createAction('[Cart API] Increase Count Failure', 
props<{error:string}>())

//decrease count of item in count
export const decreaseCount = createAction('[Cart] Decrease Count',
props<{cart_id:string}>())
export const decreaseCountSuccess= createAction('[Cart API] Decrease Count Success', 
props<{message:string}>())
export const decreaseCountFailure= createAction('[Cart API] Decrease Count Failure', 
props<{error:string}>())

//delete cart item
export const deleteCartItem = createAction('[Cart] delete Cart Item ',
props<{cart_id:string}>())
export const deleteCartItemSuccess= createAction('[Cart API] delete Cart Item  Success', 
props<{message:string}>())
export const deleteCartItemFailure= createAction('[Cart API] delete Cart Item  Failure', 
props<{error:string}>())
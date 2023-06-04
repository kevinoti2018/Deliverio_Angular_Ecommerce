import { createAction, props } from "@ngrx/store"
import { Product } from "src/Interfaces/Interfaces"


export const GetProducts=createAction('[Product] get products')

export const GetProductSuccess=createAction('[Product] get products success',props<{products:Product[]}>());
export const GetProductFailure=createAction('[Product] get products failure',props<{error:any}>());

export const GetSingleProduct = createAction('[Product] Get Single Product', props<{ productId: string }>());
export const GetSingleProductSuccess = createAction('[Product] Get Single Product Success', props<{ product: Product }>());
export const GetSingleProductFailure = createAction('[Product] Get Single Product Failure', props<{ error: any }>());


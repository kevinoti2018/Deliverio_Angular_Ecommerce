import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "src/app/services/productservices/products.service";
import { GetProductFailure, GetProductSuccess, GetProducts, addToCart, addToCartFailure, addToCartSuccess} from "../actions/products.action";
import { catchError, map, mergeMap, of } from "rxjs";





@Injectable()

export class ProductEffects{

  constructor( private productservice:ProductsService,private Actions$:Actions){}
    
   GetProducts$=createEffect(()=>
      this.Actions$.pipe(
        ofType(GetProducts),
        mergeMap(()=>this.productservice.getallproducts().pipe(
            map(products=>GetProductSuccess({products})),
            catchError(error=>of(GetProductFailure({error})))
        ))
       
      )
   );


   addToCart$=createEffect(()=>
      this.Actions$.pipe(
        ofType(addToCart),
        mergeMap((action)=>this.productservice.AddToCart(action.product_id).pipe(
            map(products=>addToCartSuccess({message:products.product_id})),
            catchError(error=>of(addToCartFailure({error})))
        ))
       
      )
   );

    
}
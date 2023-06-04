import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "src/app/services/productservices/products.service";
import { GetProductFailure, GetProductSuccess, GetProducts, GetSingleProduct, GetSingleProductFailure, GetSingleProductSuccess } from "../actions/products.action";
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
   )

   getSingleProduct$ = createEffect(() =>
   this.Actions$.pipe(
     ofType(GetSingleProduct),
     mergeMap(({ productId }) =>
       this.productservice.getsingleproduct(productId).pipe(
         map((product) => GetSingleProductSuccess({ product })),
         catchError((error) => of(GetSingleProductFailure({ error })))
       )
     )
   )
   )


    
}
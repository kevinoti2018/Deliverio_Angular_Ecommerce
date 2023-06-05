export interface Slide{
    id: string,
    image: string,
    name: string
  }

//     id: string,

//     name: string,

//     // alt: string,

//     image: string

//   }
export interface LogUserSuccess{
    token:string
    role:string
    message:string
    username:string
}

export interface UserSuccess{
    message:string
}
export  interface User{
    // id:string,
    username:string,
    email:string,
    password:string,
   

} 
export interface Slide{
    id: string,
    image: string,
    // alt: string,
    name: string
  }
export interface LoginUser{
    email:string,
    password:string,
}
export interface ResetUser{
    email:string
    newPassword:string
}
export  interface Category{
    id:string,
    name:string,
    image:string
    thumbImage: string,
     alt: string
}
export interface Category1{
    ID:string,
    NAME:string,
    IMAGE:string
}


export  interface Product{
    category_id:string,
    id:string,
    name:string,
    description:string,
    images:string,
    price:number
}
export interface ProductSuccess{
    message:string
}
export interface CART {
  id:string;
  product_id:string;
  quantity:number;
  product?:Product;
}
 export  interface Order {
    orderId: number;
    items: CART[];
    firstName:string;
    lastName:string;
    email:string;
    county:string;
    city:string;
    shippingAddress: string;
  }

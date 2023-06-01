export  interface User{
    id:string,
    username:string,
    email:string,
    password:string,
    confirm_password:string

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
    category:string,
    id:string,
    name:string,
    description:string,
    images:string,
    price:number
}

export  interface Cart{
    id:string,
    product_id:string,
    subtotal:number
}

export interface CartItem {
    id:number;
    product: Product;
    quantity: number;
  }
  

 export  interface Order {
    orderId: number;
    items: CartItem[];
    firstName:string;
    lastName:string;
    email:string;
    county:string;
    city:string;
    shippingAddress: string;
  }

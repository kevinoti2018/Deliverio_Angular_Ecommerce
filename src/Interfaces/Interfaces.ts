export  interface User{
    id:string,
    username:string,
    email:string,
    password:string,
    confirm_password:string

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
    quantity:number,
    subtotal:number
}

export  interface Order{
    id:string,
    user_id:string,
    cart_id:string,
    total:number
}

export  interface OrderItems{
    id:string,
    order_id:string,
}
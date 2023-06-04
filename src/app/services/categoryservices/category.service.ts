import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Category1, Product, Slide } from 'src/Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   categories: Slide[] = [
    {
      id: "1",
      name: "Sporting Goods",
      image: "https://purepng.com/public/uploads/thumbnail/purepng.com-running-shoesrunning-shoesrunningshoessportingphysical-activitiesstyle-1701528186052tpphz.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "2",
      name: "Phones & Tablets",
      image: "https://purepng.com/public/uploads/thumbnail/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-251530689700klmig.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "3",
      name: "Home & Office",
      image: "https://purepng.com/public/uploads/thumbnail/paper-shredder-xlg.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "4",
      name: "Appliances",
      image: "https://purepng.com/public/uploads/thumbnail/purepng.com-cooking-pancooking-pancookingpantablewarecookwarebakeware-1701528264559jzzlr.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "5",
      name: "Beauty",
      image: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "6",
      name: "Fashion",
      image: "https://purepng.com/public/uploads/thumbnail/heart-necklace-for-women-ozv.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "7",
      name: "Top deals",
      image: "https://purepng.com/public/uploads/thumbnail/nikon-camers-mij.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    },
    {
      id: "8",
      name: "Computing",
      image: "https://purepng.com/public/uploads/thumbnail/purepng.com-scannerscannerdevice-for-examiningcomputer-deviceelectronic-device-1701528372827h7gdg.png",
      // thumbImage: "https://purepng.com/public/uploads/thumbnail/mirror-with-decorative-frame-rkz.png",
      // alt:"Beauty"
    }
 
  ];
  
  constructor(private httpClient:HttpClient) { 
    
  }
  
  private baseurl = 'http://localhost:5000/products';
  getCategory1():Observable<Category1[]>{
    return this.httpClient.get<Category1[]>(`${this.baseurl}/getcategories`)
  }
  getCategory(){
    return this.categories
  }
  getProductsByCategory(categoryId: string): Observable<Product[]> {
    const url = `${this.baseurl}/getcategory/${categoryId}`;
    return this.httpClient.get<Product[]>(url);
  }
}


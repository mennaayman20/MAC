import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private apiUrl = 'https://dummyjson.com/carts/add';

  constructor() {}

  // addToCart() {
  //   const body = {
  //     userId: 1,
  //     products: [
  //       { id: 1, quantity: 2 },
  //       { id: 50, quantity: 1 }
  //     ]
  //   };

  //   return this.http.post(this.apiUrl, body);
  // }
}


//post , put -->>>url(api) , body , option header
//get , delete-->>url(api),option header
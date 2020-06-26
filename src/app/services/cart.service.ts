import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cart } from '../models/cart';
import {map} from 'rxjs/operators';

import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((i: any[]) => {
        const cart: Cart[] = [];

        for (const j of i){
          let productExists = false;
          for (const l in cart){
            if (cart[l].productId === j.product.id){
              cart[l].qty++;
              productExists = true;
              break;
           }
          }

          if (!productExists){
            cart.push(new Cart(j.productId, j.product));
          }
      }
        return cart;
      })
    );

  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, {product});

  }
  removeProductFromCart(product: Product): Observable<any>{
    return this.http.delete(cartUrl + product);
  }


  getCartList(){
    return this.http.get(cartUrl);
  }
}

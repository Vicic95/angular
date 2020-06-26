import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { favoritesUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  getFavorite() {

  }
  addToFavorite(productId) {
    return this.http.post(favoritesUrl, { id: productId });
  }
  removeFromFavorite(productId) {
    return this.http.delete(favoritesUrl + '/' + productId);
  }
}

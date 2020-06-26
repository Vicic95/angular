import { Component, OnInit, Input } from '@angular/core';

import {Product} from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import {CartService} from 'src/app/services/cart.service';
import { FavoritesService } from 'src/app/services/favorites.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  //
  @Input() productItem: Product;
  addedToFavorite: boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private favoriteService: FavoritesService
    ) { }

  ngOnInit(): void {
  }

  addtoCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    });
  }
  removeFromCart(){
    this.cartService.removeProductFromCart(this.productItem).subscribe(response => {
      this.msg.sendMsg(this.productItem);
    });
  }
  addToFavorite1() {
    this.favoriteService.addToFavorite(this.productItem.id).subscribe(() => {
      this.addedToFavorite = true;
    });
  }

  removeFromFavorite1() {
    this.favoriteService.removeFromFavorite(this.productItem.id).subscribe(() => {
      this.addedToFavorite = false;
    });
  }
}

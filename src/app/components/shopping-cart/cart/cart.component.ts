import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  @Output() remove: EventEmitter<Product> = new EventEmitter();
  constructor(
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  cartTotal = 0;

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCart();
  }
  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCart();

    } ) ;
  }

  loadCart(){
    this.cartService.getCart().subscribe((i: Cart[]) => {
      this.cartItems = i;
      this.calculateCart();
    });
  }
  addProductToCart(product: Product){

    let productExists = false;

    for (const i in this.cartItems){
      if (this.cartItems[i].productID === product.id){
        this.cartItems[i].qty++;
        productExists = true;
        break;
     }
    }

    if (!productExists){
      this.cartItems.push({
        productID: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }
    this.calculateCart();
  }
  calculateCart(){
    this.cartTotal = 0;
    this.cartItems.forEach(i => {
      this.cartTotal += (i.qty * i.price);
    });
  }
  removeProductFromCartHandler(){
    this.remove.emit();

  }
}

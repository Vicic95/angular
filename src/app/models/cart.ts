import { Product } from './product';

export class Cart {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: number;

  constructor(id: number, product: Product ){
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.qty = 0;
    this.price = product.price;
  }
}

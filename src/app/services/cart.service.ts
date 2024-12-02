import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private cartTotal = new BehaviorSubject<number>(0);

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }

  getCartTotal() {
    return this.cartTotal.asObservable();
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartCount.next(this.cartItems.length);
    this.cartTotal.next(this.cartItems.reduce((total, item) => total + item.precio, 0));
  }
}

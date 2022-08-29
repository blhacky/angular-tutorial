import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Add item to the cart
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /**
   * Get alle items
   */
  getItems() {
    return this.items;
  }

  /**
   * Clear the cart
   */
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
}

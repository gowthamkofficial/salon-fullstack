import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/admin.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const currentProducts = this.productsSubject.value;
    const newId = currentProducts.length ? Math.max(...currentProducts.map(p => p.id)) + 1 : 1;
    this.productsSubject.next([...currentProducts, { id: newId, ...product }]);
  }

  updateProduct(id: number, product: Omit<Product, 'id'>): void {
    const currentProducts = this.productsSubject.value;
    const updated = currentProducts.map(p => p.id === id ? { id, ...product } : p);
    this.productsSubject.next(updated);
  }

  deleteProduct(id: number): void {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next(currentProducts.filter(p => p.id !== id));
  }
}

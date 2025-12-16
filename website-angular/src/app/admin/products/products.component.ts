import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/admin.models';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  editingId: number | null = null;
  error: string | null = null;
  success: string | null = null;
  searchTerm: string = '';

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      status: ['active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addOrUpdateProduct() {
    this.error = null;
    this.success = null;
    if (this.productForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }
    if (this.editingId !== null) {
      this.productsService.updateProduct(this.editingId, this.productForm.value);
      this.success = 'Product updated.';
      this.editingId = null;
    } else {
      this.productsService.addProduct(this.productForm.value);
      this.success = 'Product added.';
    }
    this.productForm.reset({ status: 'active', price: 0, stock: 0 });
  }

  editProduct(product: Product) {
    this.editingId = product.id;
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      stock: product.stock,
      status: product.status
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id);
    this.success = 'Product deleted.';
  }

  cancelEdit() {
    this.editingId = null;
    this.productForm.reset({ status: 'active', price: 0, stock: 0 });
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

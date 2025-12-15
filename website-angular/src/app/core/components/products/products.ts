import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
  rating?: number;
  reviewCount?: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  standalone: false
})
export class Products implements OnInit {
  // Wishlist storage
  wishlist: number[] = [];
  
  // API Integration Point: Products data will be fetched from backend
  products: Product[] = [
    { 
      id: 1, 
      name: 'Professional Hair Repair Shampoo', 
      description: 'Restores damaged hair with keratin complex. Sulfate-free formula.', 
      price: 450, 
      originalPrice: 550, 
      category: 'Hair Care', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.5, 
      reviewCount: 128 
    },
    { 
      id: 2, 
      name: 'Smooth & Shine Conditioner', 
      description: 'Deep conditioning treatment for silky smooth hair. Weightless formula.', 
      price: 500, 
      category: 'Hair Care', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7, 
      reviewCount: 89 
    },
    { 
      id: 3, 
      name: 'Heat Protectant Hair Serum', 
      description: 'Protects hair up to 450°F. Controls frizz and adds shine.', 
      price: 350, 
      originalPrice: 400, 
      category: 'Hair Styling', 
      inStock: false, 
      imageUrl: 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.2, 
      reviewCount: 56 
    },
    { 
      id: 4, 
      name: 'Premium Nail Polish Set', 
      description: 'Set of 5 long-lasting gel nail polishes. Non-toxic formula.', 
      price: 600, 
      category: 'Nail Care', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1607771992900-1d6461dfd9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8, 
      reviewCount: 203 
    },
    { 
      id: 5, 
      name: 'Moisturizing Facial Cream SPF 30', 
      description: 'Daily moisturizer with sun protection. Suitable for all skin types.', 
      price: 800, 
      originalPrice: 950, 
      category: 'Skin Care', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.6, 
      reviewCount: 167 
    },
    { 
      id: 6, 
      name: 'Natural Beard Oil - Sandalwood', 
      description: 'Promotes beard growth. Conditions skin and reduces itchiness.', 
      price: 300, 
      category: 'Men\'s Grooming', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1594736797933-d4300d6d23a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.9, 
      reviewCount: 42 
    },
    { 
      id: 7, 
      name: 'Professional Hair Color Kit', 
      description: 'Ammonia-free hair color. Lasts up to 8 weeks.', 
      price: 1200, 
      category: 'Hair Color', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.4, 
      reviewCount: 78 
    },
    { 
      id: 8, 
      name: 'Gentle Face Wash - All Skin Types', 
      description: 'pH balanced cleanser. Removes impurities without drying.', 
      price: 250, 
      category: 'Skin Care', 
      inStock: false, 
      imageUrl: 'https://images.unsplash.com/photo-1556228578-ef413d1c4c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.3, 
      reviewCount: 95 
    },
    { 
      id: 9, 
      name: 'Volume & Texture Hair Spray', 
      description: 'Non-sticky hair spray for volume and hold. Brushable finish.', 
      price: 420, 
      originalPrice: 500, 
      category: 'Hair Styling', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1556228849-6ee6d4e6a5e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.1, 
      reviewCount: 67 
    },
    { 
      id: 10, 
      name: 'Nail Care Kit', 
      description: 'Complete nail care set with cuticle oil and nail files.', 
      price: 350, 
      category: 'Nail Care', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7, 
      reviewCount: 134 
    },
    { 
      id: 11, 
      name: 'Anti-Aging Night Cream', 
      description: 'Overnight repair cream with retinol and hyaluronic acid.', 
      price: 950, 
      originalPrice: 1200, 
      category: 'Skin Care', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1556228579-6d0c0a0e1e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8, 
      reviewCount: 189 
    },
    { 
      id: 12, 
      name: 'Beard & Mustache Wax', 
      description: 'Strong hold wax for beard styling. Natural ingredients.', 
      price: 280, 
      category: 'Men\'s Grooming', 
      inStock: true, 
      imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.5, 
      reviewCount: 58 
    }
  ];

  categories = ['All', 'Hair Care', 'Skin Care', 'Nail Care', 'Hair Styling', 'Men\'s Grooming', 'Hair Color'];
  selectedCategory = 'All';

  // Cart count
  cartCount = 0;

  ngOnInit() {
    // Initialize or fetch cart count from service
    // Load wishlist from localStorage or service
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      this.wishlist = JSON.parse(savedWishlist);
    }
  }

  filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  // Add to cart functionality
  addToCart(product: Product): void {
    if (!product.inStock) return;
    
    console.log('Adding to cart:', product);
    this.cartCount++;
    
    // Show feedback
    this.showNotification(`${product.name} added to cart!`, 'success');
    
    // In real app: this.cartService.addToCart(product);
  }

  // View product details
  viewProduct(product: Product): void {
    console.log('Viewing product:', product);
    // Navigate to product detail page or open modal
    // this.router.navigate(['/product', product.id]);
  }

  // Toggle wishlist
  toggleWishlist(product: Product): void {
    const index = this.wishlist.indexOf(product.id);
    
    if (index > -1) {
      // Remove from wishlist
      this.wishlist.splice(index, 1);
      this.showNotification(`${product.name} removed from wishlist`, 'info');
    } else {
      // Add to wishlist
      this.wishlist.push(product.id);
      this.showNotification(`${product.name} added to wishlist`, 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  // Check if product is in wishlist
  isInWishlist(product: Product): boolean {
    return this.wishlist.includes(product.id);
  }

  // Open consultation
  openConsultation(): void {
    console.log('Opening consultation form');
    // Open modal or navigate to consultation page
  }

  calculateDiscount(original: number, current: number): number {
    return Math.round(((original - current) / original) * 100);
  }

  // Get rating stars display
  getRatingStars(rating: number = 0): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }

  // Show notification
  private showNotification(message: string, type: 'success' | 'error' | 'info'): void {
    // In real app, use a toast notification service
    console.log(`${type.toUpperCase()}: ${message}`);
    
    // Simple browser notification (requires permission)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(message);
    }
  }
}
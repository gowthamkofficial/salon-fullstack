import { Component } from '@angular/core';

interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  popular: boolean;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
  standalone: false
})
export class ServicesComponent {
  // API Integration Point: This data will be fetched from backend API
  services: Service[] = [
    { id: 1, name: 'Haircut & Styling', description: 'Professional haircut with blow dry and styling', duration: '45 mins', price: 300, category: 'Hair', popular: true },
    { id: 2, name: 'Hair Coloring', description: 'Full hair coloring with premium products', duration: '2 hours', price: 1500, category: 'Hair', popular: true },
    { id: 3, name: 'Hair Spa', description: 'Complete hair spa treatment for damaged hair', duration: '1.5 hours', price: 800, category: 'Hair', popular: false },
    { id: 4, name: 'Manicure', description: 'Basic manicure with nail shaping and polish', duration: '45 mins', price: 250, category: 'Nails', popular: false },
    { id: 5, name: 'Pedicure', description: 'Luxury pedicure with foot massage', duration: '1 hour', price: 350, category: 'Nails', popular: true },
    { id: 6, name: 'Facial', description: 'Basic facial with cleansing and moisturizing', duration: '1 hour', price: 600, category: 'Skin', popular: true },
    { id: 7, name: 'Threading', description: 'Eyebrow threading and shaping', duration: '20 mins', price: 50, category: 'Face', popular: false },
    { id: 8, name: 'Waxing', description: 'Full arms waxing', duration: '30 mins', price: 200, category: 'Body', popular: false }
  ];

  categories = ['All', 'Hair', 'Nails', 'Skin', 'Face', 'Body'];
  selectedCategory = 'All';

  filteredServices(): Service[] {
    if (this.selectedCategory === 'All') {
      return this.services;
    }
    return this.services.filter(service => service.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  bookService(service: Service): void {
    // API Integration Point: This will trigger booking modal or redirect
    console.log('Booking service:', service);
    // In production, this will navigate to appointment booking with service pre-selected
  }
}
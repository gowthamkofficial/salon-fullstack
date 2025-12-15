import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {
  salonInfo = {
    name: 'Saravanan K Salon',
    address: 'Vikkiramangalam Bus stand, Usilampatti, Madurai - 625207',
    hours: 'Mon-Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 6:00 PM'
  };

  quickLinks = [
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/staff', label: 'Our Team' },
    { path: '/appointments', label: 'Book Appointment' }
  ];

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
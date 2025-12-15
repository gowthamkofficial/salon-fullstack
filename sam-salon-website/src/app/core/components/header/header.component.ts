import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
title() {
// throw new Error('Method not implemented.');
  return 'SAM Salon & Spa';
}
  isMobileMenuOpen = false;

  navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/staff', label: 'Our Team' },
    { path: '/appointments', label: 'Book Appointment' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: false,
})
export class HeroComponent {
  // Background pattern (simplified version)
  backgroundPattern = `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18a3 3 0 100-6 3 3 0 000 6zm40 0a3 3 0 100-6 3 3 0 000 6zm40 0a3 3 0 100-6 3 3 0 000 6z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E')`;

  bookAppointment(): void {
    console.log('Book appointment clicked');
    // Navigate to booking page or open modal
    // this.router.navigate(['/booking']);
    
    // Or show booking modal
    // this.dialog.open(BookingModalComponent);
  }
}
import { Component } from '@angular/core';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  imageColor: string;
  available: boolean;
  nextAvailable?: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.html',
  styleUrls: ['./staff.scss'],
  standalone: false
})
export class Staff {
  // API Integration Point: Staff data will be fetched from backend
  staffMembers: StaffMember[] = [
    { 
      id: 1, 
      name: 'Saravanan K', 
      role: 'Head Stylist & Owner', 
      experience: '15+ years', 
      specialties: ['Hair Cutting', 'Hair Coloring', 'Styling'], 
      bio: 'With over 15 years of experience in the beauty industry, Saravanan specializes in modern haircuts and color techniques.', 
      imageColor: 'bg-red-100',
      available: true,
      nextAvailable: '4:00 PM'
    },
    { 
      id: 2, 
      name: 'Priya S', 
      role: 'Senior Beauty Therapist', 
      experience: '8+ years', 
      specialties: ['Facials', 'Skincare', 'Waxing'], 
      bio: 'Priya is certified in advanced skincare treatments and provides customized facial treatments based on skin analysis.', 
      imageColor: 'bg-blue-100',
      available: true,
      nextAvailable: '2:30 PM'
    },
    { 
      id: 3, 
      name: 'Arun Kumar', 
      role: 'Men\'s Grooming Expert', 
      experience: '6+ years', 
      specialties: ['Beard Styling', 'Haircuts', 'Shaves'], 
      bio: 'Arun specializes in men\'s grooming services and keeps up with the latest trends in men\'s hairstyles.', 
      imageColor: 'bg-green-100',
      available: false,
      nextAvailable: 'Tomorrow 10:00 AM'
    }
  ];

  // API Integration Point: This will fetch available time slots from backend
  getStaffAvailability(staffId: number): void {
    console.log('Fetching availability for staff:', staffId);
    // This will call backend API for staff availability
  }
}
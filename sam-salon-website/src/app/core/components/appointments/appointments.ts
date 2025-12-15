import { Component } from '@angular/core';

interface TimeSlot {
  time: string;
  available: boolean;
  bookedBy?: string;
}

interface Appointment {
  id: number;
  customerName: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss'],
  standalone: false
})
export class Appointments {
  // API Integration Point: These data will be fetched from backend
  timeSlots: TimeSlot[] = [
    { time: '9:00 AM', available: false, bookedBy: 'Ramesh K' },
    { time: '10:00 AM', available: false, bookedBy: 'Priya S' },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '1:00 PM', available: false, bookedBy: 'Lunch Break' },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: false, bookedBy: 'Suresh M' },
    { time: '4:00 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '6:00 PM', available: false, bookedBy: 'Anitha R' },
    { time: '7:00 PM', available: true }
  ];

  appointmentTypes = [
    { id: 1, name: 'Haircut', duration: '45 mins' },
    { id: 2, name: 'Hair Color', duration: '2 hours' },
    { id: 3, name: 'Facial', duration: '1 hour' },
    { id: 4, name: 'Manicure', duration: '45 mins' }
  ];

  // Mock appointments data
  appointments: Appointment[] = [
    { id: 1, customerName: 'Ramesh K', service: 'Haircut & Styling', staff: 'Saravanan K', date: '2024-01-15', time: '9:00 AM', status: 'confirmed' },
    { id: 2, customerName: 'Priya S', service: 'Hair Coloring', staff: 'Saravanan K', date: '2024-01-15', time: '10:00 AM', status: 'confirmed' },
    { id: 3, customerName: 'Suresh M', service: 'Men\'s Grooming', staff: 'Arun Kumar', date: '2024-01-15', time: '3:00 PM', status: 'pending' },
    { id: 4, customerName: 'Anitha R', service: 'Facial', staff: 'Priya S', date: '2024-01-15', time: '6:00 PM', status: 'confirmed' }
  ];

  selectedDate: string = '2024-01-15';
  selectedService: string = '';
  selectedStaff: string = '';
  customerName: string = '';
  customerPhone: string = '';
availableSlots: any;

  bookAppointment(timeSlot: TimeSlot): void {
    if (timeSlot.available) {
      // API Integration Point: This will send booking request to backend
      console.log('Booking appointment for:', timeSlot.time);
      console.log('Customer:', this.customerName);
      console.log('Service:', this.selectedService);
      console.log('Staff:', this.selectedStaff);
      
      // Reset form
      this.customerName = '';
      this.customerPhone = '';
      this.selectedService = '';
      this.selectedStaff = '';
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
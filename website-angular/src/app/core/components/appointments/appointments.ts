import { Component, OnInit } from '@angular/core';

interface QueueCustomer {
  id: number;
  queueNumber: string;
  name: string;
  phone: string;
  service: string;
  duration: string;
  staff: string;
  staffRole: string;
  arrivalTime: string;
  waitingTime: string;
  estimatedTime: string;
  estimatedDuration: string;
  status: 'waiting' | 'in-progress' | 'completed';
  completedTime?: string;
}

@Component({
  selector: 'app-salon-queue',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss'],
  standalone: false
})
export class Appointments implements OnInit {
  queueCustomers: QueueCustomer[] = [];
  completedToday = 8;
  currentTime = new Date();

  ngOnInit() {
    this.loadQueueData();
    // Update time every minute
    setInterval(() => {
      this.currentTime = new Date();
      this.updateWaitingTimes();
    }, 60000);
  }

  loadQueueData() {
    // Mock data - In real app, this would come from API
    this.queueCustomers = [
      {
        id: 1,
        queueNumber: 'SQ-001',
        name: 'Priya Sharma',
        phone: '+91 98765 43210',
        service: 'Haircut & Styling',
        duration: '45 mins',
        staff: 'Sam\'s Salon and Face care',
        staffRole: 'Head Stylist',
        arrivalTime: '10:15 AM',
        waitingTime: '25 mins',
        estimatedTime: '11:30 AM',
        estimatedDuration: '15 mins',
        status: 'in-progress'
      },
      {
        id: 2,
        queueNumber: 'SQ-002',
        name: 'Rahul Verma',
        phone: '+91 87654 32109',
        service: 'Beard Trim',
        duration: '20 mins',
        staff: 'Arun Kumar',
        staffRole: 'Men\'s Grooming',
        arrivalTime: '10:30 AM',
        waitingTime: '10 mins',
        estimatedTime: '11:45 AM',
        estimatedDuration: '45 mins',
        status: 'waiting'
      },
      {
        id: 3,
        queueNumber: 'SQ-003',
        name: 'Anjali Patel',
        phone: '+91 76543 21098',
        service: 'Hair Coloring',
        duration: '2 hours',
        staff: 'Sam\'s Salon and Face care',
        staffRole: 'Head Stylist',
        arrivalTime: '10:45 AM',
        waitingTime: '5 mins',
        estimatedTime: '12:15 PM',
        estimatedDuration: '1.5 hours',
        status: 'waiting'
      },
      {
        id: 4,
        queueNumber: 'SQ-004',
        name: 'Suresh Kumar',
        phone: '+91 65432 10987',
        service: 'Facial',
        duration: '1 hour',
        staff: 'Priya S',
        staffRole: 'Beauty Therapist',
        arrivalTime: '11:00 AM',
        waitingTime: 'Just arrived',
        estimatedTime: '1:00 PM',
        estimatedDuration: '2 hours',
        status: 'waiting'
      },
      {
        id: 5,
        queueNumber: 'SQ-005',
        name: 'Meena Raj',
        phone: '+91 54321 09876',
        service: 'Manicure & Pedicure',
        duration: '1.5 hours',
        staff: 'Priya S',
        staffRole: 'Beauty Therapist',
        arrivalTime: '10:50 AM',
        waitingTime: '20 mins',
        estimatedTime: '2:00 PM',
        estimatedDuration: '3 hours',
        status: 'completed',
        completedTime: '11:10 AM'
      }
    ];
  }

  getTotalWaiting(): number {
    return this.queueCustomers.filter(c => c.status === 'waiting').length;
  }

  getInProgressCount(): number {
    return this.queueCustomers.filter(c => c.status === 'in-progress').length;
  }

  getNextAvailableSlot(): string {
    const waiting = this.queueCustomers.filter(c => c.status === 'waiting');
    return waiting.length > 0 ? waiting[0].estimatedTime : 'Now';
  }

  getRowClass(status: string): string {
    switch(status) {
      case 'in-progress': return 'bg-blue-50';
      case 'completed': return 'bg-green-50 opacity-75';
      default: return '';
    }
  }

  getQueueNumberClass(status: string): string {
    switch(status) {
      case 'in-progress': return 'bg-blue-600';
      case 'waiting': return 'bg-yellow-600';
      case 'completed': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch(status) {
      case 'waiting': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getCurrentlyServing(): QueueCustomer | null {
    return this.queueCustomers.find(c => c.status === 'in-progress') || null;
  }

  getNextInLine(): QueueCustomer[] {
    return this.queueCustomers.filter(c => c.status === 'waiting').slice(0, 2);
  }

  getRecentlyCompleted(): QueueCustomer[] {
    return this.queueCustomers.filter(c => c.status === 'completed').slice(0, 2);
  }

  updateWaitingTimes() {
    // Update waiting times logic (simplified)
    this.queueCustomers.forEach(customer => {
      if (customer.status === 'waiting') {
        // In real app, calculate actual waiting time
      }
    });
  }
}
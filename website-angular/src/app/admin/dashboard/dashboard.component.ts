import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent {
  metrics = [
    { label: 'Total Appointments', value: 0, icon: 'event' },
    { label: 'Total Income', value: 0, icon: 'attach_money' },
    { label: 'Total Expenses', value: 0, icon: 'money_off' },
    { label: 'Active Staff', value: 0, icon: 'people' }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExpenseItem {
  id: number;
  date: string;
  amount: number;
  category: string;
}

@Component({
  selector: 'app-admin-expense-report',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ExpenseComponent {
  expenses: ExpenseItem[] = [];
}

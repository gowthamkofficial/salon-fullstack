import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IncomeItem {
  id: number;
  date: string;
  amount: number;
  source: string;
}

@Component({
  selector: 'app-admin-income-report',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class IncomeComponent {
  income: IncomeItem[] = [];
}

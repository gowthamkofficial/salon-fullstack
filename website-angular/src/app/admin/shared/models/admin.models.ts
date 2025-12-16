export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number;
  status: 'active' | 'inactive';
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive';
}

export interface Staff {
  id: number;
  name: string;
  role: string;
  phone: string;
  status: 'active' | 'inactive';
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Appointment {
  id: number;
  client: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}

export interface IncomeItem {
  id: number;
  date: string;
  amount: number;
  source: string;
}

export interface ExpenseItem {
  id: number;
  date: string;
  amount: number;
  category: string;
}

export interface SalonSettings {
  salonName: string;
  address: string;
  phone: string;
  email: string;
}

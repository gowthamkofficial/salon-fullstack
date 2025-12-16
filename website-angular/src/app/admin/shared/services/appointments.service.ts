import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/admin.models';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();

  getAppointments(): Observable<Appointment[]> {
    return this.appointments$;
  }

  addAppointment(appointment: Omit<Appointment, 'id'>): void {
    const currentAppointments = this.appointmentsSubject.value;
    const newId = currentAppointments.length ? Math.max(...currentAppointments.map(a => a.id)) + 1 : 1;
    this.appointmentsSubject.next([...currentAppointments, { id: newId, ...appointment }]);
  }

  updateAppointment(id: number, appointment: Omit<Appointment, 'id'>): void {
    const currentAppointments = this.appointmentsSubject.value;
    const updated = currentAppointments.map(a => a.id === id ? { id, ...appointment } : a);
    this.appointmentsSubject.next(updated);
  }

  deleteAppointment(id: number): void {
    const currentAppointments = this.appointmentsSubject.value;
    this.appointmentsSubject.next(currentAppointments.filter(a => a.id !== id));
  }
}

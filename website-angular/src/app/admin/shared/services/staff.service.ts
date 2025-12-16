import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Staff } from '../models/admin.models';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private staffSubject = new BehaviorSubject<Staff[]>([]);
  staff$ = this.staffSubject.asObservable();

  getStaff(): Observable<Staff[]> {
    return this.staff$;
  }

  addStaff(staff: Omit<Staff, 'id'>): void {
    const currentStaff = this.staffSubject.value;
    const newId = currentStaff.length ? Math.max(...currentStaff.map(s => s.id)) + 1 : 1;
    this.staffSubject.next([...currentStaff, { id: newId, ...staff }]);
  }

  updateStaff(id: number, staff: Omit<Staff, 'id'>): void {
    const currentStaff = this.staffSubject.value;
    const updated = currentStaff.map(s => s.id === id ? { id, ...staff } : s);
    this.staffSubject.next(updated);
  }

  deleteStaff(id: number): void {
    const currentStaff = this.staffSubject.value;
    this.staffSubject.next(currentStaff.filter(s => s.id !== id));
  }
}

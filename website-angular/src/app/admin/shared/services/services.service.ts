import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service } from '../models/admin.models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private servicesSubject = new BehaviorSubject<Service[]>([]);
  services$ = this.servicesSubject.asObservable();

  getServices(): Observable<Service[]> {
    return this.services$;
  }

  addService(service: Omit<Service, 'id'>): void {
    const currentServices = this.servicesSubject.value;
    const newId = currentServices.length ? Math.max(...currentServices.map(s => s.id)) + 1 : 1;
    this.servicesSubject.next([...currentServices, { id: newId, ...service }]);
  }

  updateService(id: number, service: Omit<Service, 'id'>): void {
    const currentServices = this.servicesSubject.value;
    const updated = currentServices.map(s => s.id === id ? { id, ...service } : s);
    this.servicesSubject.next(updated);
  }

  deleteService(id: number): void {
    const currentServices = this.servicesSubject.value;
    this.servicesSubject.next(currentServices.filter(s => s.id !== id));
  }
}

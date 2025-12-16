import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../shared/services/services.service';
import { Service } from '../shared/models/admin.models';

@Component({
  selector: 'app-admin-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  serviceForm: FormGroup;
  editingId: number | null = null;
  error: string | null = null;
  success: string | null = null;
  searchTerm: string = '';

  constructor(private fb: FormBuilder, private servicesService: ServicesService) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      duration: [0, [Validators.required, Validators.min(1)]],
      status: ['active', Validators.required],
    });
  }

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((services) => {
      this.services = services;
    });
  }

  addOrUpdateService() {
    this.error = null;
    this.success = null;
    if (this.serviceForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }
    if (this.editingId !== null) {
      this.servicesService.updateService(this.editingId, this.serviceForm.value);
      this.success = 'Service updated.';
      this.editingId = null;
    } else {
      this.servicesService.addService(this.serviceForm.value);
      this.success = 'Service added.';
    }
    this.serviceForm.reset({ status: 'active', price: 0, duration: 0 });
  }

  editService(service: Service) {
    this.editingId = service.id;
    this.serviceForm.setValue({
      name: service.name,
      price: service.price,
      duration: service.duration,
      status: service.status,
    });
  }

  deleteService(id: number) {
    this.servicesService.deleteService(id);
    this.success = 'Service deleted.';
  }

  cancelEdit() {
    this.editingId = null;
    this.serviceForm.reset({ status: 'active', price: 0, duration: 0 });
  }

  get filteredServices(): Service[] {
    return this.services.filter((s) =>
      s.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

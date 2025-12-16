import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsService } from '../shared/services/appointments.service';
import { Appointment } from '../shared/models/admin.models';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  appointmentForm: FormGroup;
  editingId: number | null = null;
  error: string | null = null;
  success: string | null = null;
  searchTerm: string = '';

  constructor(private fb: FormBuilder, private appointmentsService: AppointmentsService) {
    this.appointmentForm = this.fb.group({
      client: ['', Validators.required],
      service: ['', Validators.required],
      staff: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['pending', Validators.required]
    });
  }

  ngOnInit(): void {
    this.appointmentsService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
    });
  }

  addOrUpdateAppointment() {
    this.error = null;
    this.success = null;
    if (this.appointmentForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }
    if (this.editingId !== null) {
      this.appointmentsService.updateAppointment(this.editingId, this.appointmentForm.value);
      this.success = 'Appointment updated.';
      this.editingId = null;
    } else {
      this.appointmentsService.addAppointment(this.appointmentForm.value);
      this.success = 'Appointment added.';
    }
    this.appointmentForm.reset({ status: 'pending' });
  }

  editAppointment(appointment: Appointment) {
    this.editingId = appointment.id;
    this.appointmentForm.setValue({
      client: appointment.client,
      service: appointment.service,
      staff: appointment.staff,
      date: appointment.date,
      time: appointment.time,
      status: appointment.status
    });
  }

  deleteAppointment(id: number) {
    this.appointmentsService.deleteAppointment(id);
    this.success = 'Appointment deleted.';
  }

  cancelEdit() {
    this.editingId = null;
    this.appointmentForm.reset({ status: 'pending' });
  }

  get filteredAppointments(): Appointment[] {
    return this.appointments.filter(a => 
      a.client.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      a.service.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffService } from '../shared/services/staff.service';
import { Staff } from '../shared/models/admin.models';

@Component({
  selector: 'app-admin-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class StaffComponent implements OnInit {
  staff: Staff[] = [];
  staffForm: FormGroup;
  editingId: number | null = null;
  error: string | null = null;
  success: string | null = null;
  searchTerm: string = '';

  constructor(private fb: FormBuilder, private staffService: StaffService) {
    this.staffForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.staffService.getStaff().subscribe(staff => {
      this.staff = staff;
    });
  }

  addOrUpdateStaff() {
    this.error = null;
    this.success = null;
    if (this.staffForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }
    if (this.editingId !== null) {
      this.staffService.updateStaff(this.editingId, this.staffForm.value);
      this.success = 'Staff updated.';
      this.editingId = null;
    } else {
      this.staffService.addStaff(this.staffForm.value);
      this.success = 'Staff added.';
    }
    this.staffForm.reset({ status: 'active' });
  }

  editStaff(staff: Staff) {
    this.editingId = staff.id;
    this.staffForm.setValue({
      name: staff.name,
      role: staff.role,
      phone: staff.phone,
      status: staff.status
    });
  }

  deleteStaff(id: number) {
    this.staffService.deleteStaff(id);
    this.success = 'Staff deleted.';
  }

  cancelEdit() {
    this.editingId = null;
    this.staffForm.reset({ status: 'active' });
  }

  get filteredStaff(): Staff[] {
    return this.staff.filter(s => 
      s.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

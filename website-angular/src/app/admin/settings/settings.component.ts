import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SettingsComponent {
  settingsForm: FormGroup;
  success: boolean = false;
  error: string | null = null;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      salonName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.success = false;
    this.error = null;
    if (this.settingsForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }
    // TODO: Save settings logic
    this.success = true;
  }
}

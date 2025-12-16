import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.error = null;
    if (this.loginForm.invalid) {
      this.error = 'Please fill in all fields.';
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.error = 'Invalid credentials.';
        this.loading = false;
      }
    });
  }
}

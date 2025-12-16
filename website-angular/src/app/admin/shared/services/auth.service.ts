import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          this.isAuthenticatedSubject.next(true);
          localStorage.setItem('adminAuth', 'true');
          observer.next(true);
          observer.complete();
        } else {
          observer.next(false);
          observer.complete();
        }
      }, 500);
    });
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('adminAuth');
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value || localStorage.getItem('adminAuth') === 'true';
  }

  checkAuthStatus(): void {
    const isAuth = localStorage.getItem('adminAuth') === 'true';
    this.isAuthenticatedSubject.next(isAuth);
  }
}

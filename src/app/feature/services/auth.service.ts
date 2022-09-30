import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from '../model/auth-data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | null;
  authChange = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      id: '5555',
      contacts: [],
    };
    this.authChange.next(true);
    this.router.navigate(['/']);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      id: '5555',
      contacts: [],
    };
    this.authChange.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/home']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}

import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad() {
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}

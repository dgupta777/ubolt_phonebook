import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthData } from '../model/auth-data';
import { User } from '../model/user.model';
import { UserContactService } from './user-contact.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | null;
  private isAuthenticated = false;
  authChange = new BehaviorSubject<boolean>(false);
  firebaseSubscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userContactService: UserContactService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.firebaseSubscriptions.push(
          this.userContactService.getUserById(user.uid).subscribe((data) => {
            this.user = {
              id: data.payload.id,
              ...(data.payload.data() as {}),
            } as User;

            this.isAuthenticated = true;
            this.authChange.next(true);
            this.router.navigate(['/']);
          })
        );
      } else {
        this.cancelSubscriptions();
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/home']);
        this.user = null;
      }
    });
  }

  registerUser(authData: AuthData) {
    return this.afAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    );
  }

  login(authData: AuthData) {
    return this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    );
  }

  logout() {
    this.afAuth.signOut();
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.isAuthenticated;
  }

  cancelSubscriptions() {
    this.firebaseSubscriptions.forEach((sub) => sub.unsubscribe());
  }
}

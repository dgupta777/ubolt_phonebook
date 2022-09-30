import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserContactService {
  constructor(private db: AngularFirestore) {}

  createUser(id: any, userData: User) {
    return this.db.collection('users').doc(id).set(userData);
  }

  getUserById(uid: any) {
    return this.db.collection('users').doc(uid).snapshotChanges();
  }
}

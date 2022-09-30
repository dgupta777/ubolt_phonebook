import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { arrayUnion } from 'firebase/firestore';
import { Contact } from '../model/contact.model';
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

  addContact(id: any, newContact: Contact) {
    return this.db
      .collection('users')
      .doc(id)
      .collection('contacts')
      .add(newContact);
  }

  getContacts(uid: any) {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('contacts')
      .snapshotChanges();
  }

  getContactById(uid: any, cid: any) {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('contacts')
      .doc(cid)
      .snapshotChanges();
  }

  updateContact(uid: any, cid: string, data: any) {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('contacts')
      .doc(cid)
      .update(data);
  }

  deleteContact(uid: any, cid: string) {
    this.db
      .collection('users')
      .doc(uid)
      .collection('contacts')
      .doc(cid)
      .delete();
  }
}

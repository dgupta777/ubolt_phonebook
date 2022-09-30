import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../model/contact.model';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { UserContactService } from '../services/user-contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  step!: number;
  dataSource: any;
  search = '';
  user!: User;

  displayedColumns: string[] = ['foo'];

  setStep(index: number) {
    this.step = index;
  }

  constructor(
    private authService: AuthService,
    private userContactService: UserContactService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.firebaseSubscriptions.push(
      this.userContactService.getContacts(this.user.id).subscribe((data) => {
        this.user.contacts = data.map((result) => {
          return {
            id: result.payload.doc.id,
            ...(result.payload.doc.data() as {}),
          } as Contact;
        });
        this.dataSource = new MatTableDataSource(this.user.contacts);
        this.applyFilter();
      })
    );
  }

  ngOnDestroy(): void {
    this.user = this.authService.getUser();
  }

  deleteContact(cid: string) {
    this.userContactService.deleteContact(this.user.id, cid);
  }

  applyFilter() {
    const filterValue = this.search;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

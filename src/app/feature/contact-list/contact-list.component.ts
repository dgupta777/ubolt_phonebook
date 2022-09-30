import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../model/contact.model';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contactList: Contact[] = [
    {
      firstName: 'Hello Helgfdsgdsflo Hellow He few fewfewfew HHhfdsafsd',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Darshit Gupta',
      lastName: 'World',
      email:
        'helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation:
        'helphelloworldhelloworldhelloworld helloworldhelloworld helloworld',
      org: 'FOOFOF helloworld helloworldhelloworldhelloworld helloworld',
    },
    {
      firstName: 'Virendra Pratap Singh Jhala',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Hello Hello Hellow',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Hello Hello Hellow',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Hello Hello Hellow',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Hello Hello Hellow',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Hello Hello Hellow',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
    {
      firstName: 'Hello Hello Hellow',
      lastName: 'World',
      email: 'helloworld@gmail.com',
      mobile: 9999999999,
      status: 'Active',
      designation: 'help',
      org: 'FOOFOF',
    },
  ];
  step!: number;
  dataSource: any;
  search = '';
  authSubscription!: Subscription;
  user!: User;

  displayedColumns: string[] = ['foo'];

  setStep(index: number) {
    this.step = index;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.user = this.authService.getUser();
      }
    );
    this.dataSource = new MatTableDataSource(this.contactList);
    this.applyFilter();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.user = this.authService.getUser();
  }

  applyFilter() {
    const filterValue = this.search;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

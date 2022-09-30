import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
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

  displayedColumns: string[] = ['foo'];

  setStep(index: number) {
    this.step = index;
  }

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.contactList);
    this.applyFilter();
  }

  applyFilter() {
    const filterValue = this.search;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

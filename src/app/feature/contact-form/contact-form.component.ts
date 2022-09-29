import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  errMsg!: string;
  spinner = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: ['', Validators.email],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      status: 'Active',
      designation: '',
      org: '',
    });
  }

  onSubmit() {
    this.errMsg = '';
    this.spinner = true;
    let data: Contact = this.contactForm.value;
    console.log(data);
    setTimeout(() => {
      this.spinner = false;
      this.contactForm.reset({
        firstName: '',
        lastName: '',
        email: '',
        mobile: null,
        status: 'Active',
        designation: '',
        org: '',
      });
    }, 1000);
  }
}

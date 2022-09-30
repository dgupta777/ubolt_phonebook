import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { AuthService } from '../services/auth.service';
import { UserContactService } from '../services/user-contact.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  errMsg!: string;
  spinner = false;
  contactId: any;
  isEditMode!: boolean;

  constructor(
    private fb: FormBuilder,
    private userContactService: UserContactService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contactId = this.route.snapshot.params['id'];
    if (this.contactId) {
      this.isEditMode = true;
      this.fillFormData();
    } else {
      this.isEditMode = false;
    }
    this.createForm();
  }

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

  fillFormData() {
    this.userContactService
      .getContactById(this.authService.getUser().id, this.contactId)
      .pipe(first())
      .subscribe((data) => {
        let formData = {
          id: data.payload.id,
          ...(data.payload.data() as {}),
        } as Contact;
        this.contactForm.patchValue(formData);
      });
  }

  onSubmit() {
    this.errMsg = '';
    this.spinner = true;
    let data: Contact = this.contactForm.value;

    if (!this.isEditMode) {
      this.userContactService
        .addContact(this.authService.getUser().id, data)
        .then(() => {
          this.success();
        })
        .catch((error) => {
          this.spinner = false;
          this.errMsg = error.message;
        });
    } else {
      this.userContactService
        .updateContact(this.authService.getUser().id, this.contactId, data)
        .then(() => {
          this.success();
        })
        .catch((error) => {
          this.spinner = false;
          this.errMsg = error.message;
        });
    }
  }

  success() {
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
    this.router.navigate(['/']);
  }
}

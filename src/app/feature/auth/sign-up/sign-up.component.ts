import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthData } from '../../model/auth-data';
import { User } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';
import { UserContactService } from '../../services/user-contact.service';
import { PasswordMatch } from '../password-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errMsg!: string;
  spinner = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userContactService: UserContactService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.signUpForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: PasswordMatch('password', 'confirmPassword') }
    );
  }

  onSubmit() {
    this.errMsg = '';
    this.spinner = true;
    let authData: AuthData = {
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
    };
    let userData: User = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
    };
    this.authService
      .registerUser(authData)
      .then((result) => {
        this.userContactService
          .createUser(result.user?.uid, userData)
          .then(() => {
            this.spinner = false;
            this.signUpForm.reset({
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
          })
          .catch((error) => {
            this.spinner = false;
            this.errMsg = error.message;
          });
      })
      .catch((error) => {
        this.spinner = false;
        this.errMsg = error.message;
      });
  }
}

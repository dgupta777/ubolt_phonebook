import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthData } from '../../model/auth-data';
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

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.signUpForm = this.fb.group(
      {
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
    console.log(authData);
    setTimeout(() => {
      this.spinner = false;
      this.signUpForm.reset({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }, 2000);
  }
}

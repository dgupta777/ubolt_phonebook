import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthData } from '../../model/auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errMsg!: string;
  spinner = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.errMsg = '';
    this.spinner = true;
    let authData: AuthData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(authData);
    setTimeout(() => {
      this.spinner = false;
      this.loginForm.reset({
        email: '',
        password: '',
      });
    }, 2000);
  }
}

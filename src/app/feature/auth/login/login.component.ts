import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthData } from '../../model/auth-data';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errMsg!: string;
  spinner = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
    this.authService
      .login(authData)
      .then(() => {
        this.spinner = false;
        this.loginForm.reset({
          email: '',
          password: '',
        });
      })
      .catch((err) => {
        this.spinner = false;
        this.errMsg = err.message;
      });
  }
}

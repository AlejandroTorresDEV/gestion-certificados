import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from ".././services/auth-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  successLogin: boolean;
  successRegister: boolean;
  loanding: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private authService: AuthServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateRegisterFormModel();
  }

  registerUser(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.email = this.registerForm.value.email;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    const { username, email, password } = this;
    this.loanding = true;
    this.authService
      .registerUser(username, email, password)
      .then(res => {
        this.loanding = false;
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        this.loanding = false;
        this.successLogin = true;
      });
  }

  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

}

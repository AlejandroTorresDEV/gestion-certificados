import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from ".././services/auth-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  successLogin :boolean;
  loanding: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router,private authService:AuthServiceService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateRegisterFormModel();
  }

  loginUser(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
      const { username, password } = this;
      this.loanding = true;
      this.authService
      .loginUser(username, password)
      .then(res => {
        this.loanding = false;
        if(res === 200){
          this.router.navigate(['/show-certificates']);
        }else{
          this.successLogin = true;
        }
      })
      .catch(error => {
        this.loanding = false;
        this.successLogin = true;
      });
  }

  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

}

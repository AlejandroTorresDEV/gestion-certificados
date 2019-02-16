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
  username: string ;
  password: string;
  email: string;

  loanding: boolean;

  registerForm: FormGroup;
  submitted = false;

  selectedRol : string;
  userRol : string;

  rolUsers = [
    {type : "visor"},
    {type: "admin"},
  ];

  errorRegister: boolean;
  successRegister: boolean;
  
  mensaggeSaveSucces = "Usuario creado correctamente.";
  mensaggeErrorRegister = "Ha ocurrido un error con el registro del usuario.";

  constructor(private router: Router, private authService: AuthServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateRegisterFormModel();
    this.selectedRol = 'visor';
  }

  registerUser(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.email = this.registerForm.value.email;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    const { username, email, password ,userRol} = this;
    this.loanding = true;
    this.authService
      .registerUser(username, email, password,userRol)
      .then(() => {
        this.loanding = false;
        this.successRegister = true;
        this.errorRegister = false;
      })
      .catch(() => {
        this.loanding = false;
        this.successRegister = false;
        this.errorRegister = true;
      });
  }

  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      rolUser: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

  editRolUser(){
    this.userRol = this.selectedRol;
  }
}

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

  loginServerError :boolean;
  loginBadAtributtes :boolean;

  loanding: boolean;

  registerForm: FormGroup;
  submitted = false;
  
  mensaggeErrorServer = "Error de conexión con el servidor";
  mensaggeBadAtributtes = "Las credenciales son incorrectas";

  constructor(private router: Router,private authService:AuthServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginServerError = false;
    this.loginBadAtributtes = false;
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
          this.router.navigate(['/board']);
        }
        if(res === 204){
          this.loginBadAtributtes = true;
        }
      })
      .catch(error => {
        console.log(error);
        this.loanding = false;
        this.loginServerError = true;
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

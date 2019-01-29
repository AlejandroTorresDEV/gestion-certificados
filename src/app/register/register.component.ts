import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from ".././services/auth-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  successLogin :boolean;
  successRegister :boolean;
  loanding: boolean;

  constructor(private router: Router,private authService:AuthServiceService) { }

  ngOnInit() {
  }

  registerUser() : void {
    const { username, email, password } = this;
    this.loanding = true;
    this.authService
        .registerUser(username,email,password)
        .then(res => {
          this.loanding = false;
<<<<<<< HEAD
          console.log(res);
=======
          //this.successRegister = true;
>>>>>>> feature-register
        })
        .catch(error => {
          console.log(error);
          this.loanding = false;
          this.successLogin = true;
        });
  }

}

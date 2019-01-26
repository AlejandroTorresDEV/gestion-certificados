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
  successLogin :boolean;

  constructor(private router: Router,private authService:AuthServiceService) { }

  ngOnInit() {
  }

  registerUser() : void {
    const { username, password } = this;
    this.authService
        .registerUser(username, password)
        .then(res => {
            console.log("exito");
        })
        .catch(error => {
          this.successLogin = true;
        });
  }

}

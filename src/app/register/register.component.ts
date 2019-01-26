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
  loanding: boolean;

  constructor(private router: Router,private authService:AuthServiceService) { }

  ngOnInit() {
  }

  registerUser() : void {
    const { username, password } = this;
    this.loanding = true;
    this.authService
        .registerUser(username, password)
        .then(res => {
          this.loanding = false;
            console.log("exito");
        })
        .catch(error => {
          console.log("no existo");
          this.loanding = false;
          this.successLogin = true;
        });
  }

}

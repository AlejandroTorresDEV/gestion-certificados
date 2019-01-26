import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from ".././services/auth-service.service";

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

  constructor(private router: Router,private authService:AuthServiceService) { }

  ngOnInit() {
  }

  loginUser(): void {
      const { username, password } = this;
      this.loanding = true;
      this.authService
      .loginUser(username, password)
      .then(() => {
        this.loanding = false;
        this.router.navigate(['/admin']);
      })
      .catch(error => {
        this.loanding = false;
        this.successLogin = true;
      });
  }

}

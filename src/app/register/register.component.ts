import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  successLogin :boolean;

  constructor() { }

  ngOnInit() {
  }

  registerUser() : void {
    this.successLogin = true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  password: string;
  url: string;
  proyecto: string;
  componente: string;

  successLogin :boolean;

  constructor() { }

  ngOnInit() {
  }

  saveUserJira(){
    console.log(this.email,this.password,this.url,this.proyecto,this.componente);
  }

}

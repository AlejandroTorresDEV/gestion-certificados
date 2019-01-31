import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../services/profile-jira.service'
import { Jira } from "../interfaces/Jira";
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

  constructor(private jiraService: ProfileJiraService) { }

  ngOnInit() {
  }

  saveUserJira(){
    const newJira: Jira = {
      username: this.email,
      password: this.password,
      url: this.url,
      proyect: this.proyecto,
      componente: this.componente
    };

    this.jiraService.saveUserJira(newJira)  .then(res => {
      console.log(res);
      //this.successRegister = true;
    })
    .catch(error => {
      console.log(error);
      this.successLogin = true;
    });;

  }

}

import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../profile-jira.service'
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
      email: this.email,
      password: this.password,
      url: this.url,
      proyecto: this.proyecto,
      componente: this.componente
    };

    console.log(newJira);
  }

}

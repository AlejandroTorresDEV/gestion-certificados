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

    this.jiraService.saveUserJira(this.email,this.password,this.url,this.proyecto,this.componente).then(res => {
      console.log(res);
      //this.successRegister = true;
    })
    .catch(error => {
      console.log(error);
      this.successLogin = true;
    });;

  }

}

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
  successSave :boolean;
  errorSave : boolean;

  constructor(private jiraService: ProfileJiraService) { }

  ngOnInit() {
  }

  saveUserJira(){
    this.jiraService.saveUserJira(this.email,this.password,this.url,this.proyecto,this.componente).then(res => {
      console.log(res);
      this.successSave = true;
    })
    .catch(error => {
      console.log(error);
      this.errorSave = true;
    });;

  }

}

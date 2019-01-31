import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../profile-jira.service'
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
    console.log(this.email,this.password,this.url,this.proyecto,this.componente);
  }

}

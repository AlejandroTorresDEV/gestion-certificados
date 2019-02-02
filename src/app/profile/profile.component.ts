import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../profile-jira.service'
import { Jira } from "../interfaces/Jira";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username : string;
  password : string;
  url: string;
  proyecto: string;
  componente: string;
  successSave :boolean;
  errorSave : boolean;
  editing : boolean;
  jiraExistente :boolean;

  constructor(private jiraService: ProfileJiraService) { }

  ngOnInit() {
    if(this.jiraService.getUserJira()){
      this.jiraExistente = false;
    }else{
      this.jiraExistente = true;
    }
  }

  saveUserJira(){
    const saveAccountJira: Jira = 
    {  
      user_id : "1",
      username : this.username,
      password: this.password,
      url: this.url,
      proyect: this.proyecto,
      componente: this.componente
    }
    this.jiraService.saveUserJira(saveAccountJira).then(res => {
      console.log(res);
      this.successSave = true;
    })
    .catch(error => {
      console.log(error);
      this.errorSave = true;
    });;

  }

  updateUserJira(){
    const updateAccountJira: Jira = 
    {  
      user_id : "1",
      username : this.username,
      password: this.password,
      url: this.url,
      proyect: this.proyecto,
      componente: this.componente
    }
    this.jiraService.saveUserJira(updateAccountJira).then(res => {
      console.log(res);
      this.successSave = true;
    })
    .catch(error => {
      console.log(error);
      this.errorSave = true;
    });;
  }

  cambiarEdicion(){
    this.editing = !this.editing;
  }

}

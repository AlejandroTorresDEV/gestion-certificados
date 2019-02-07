import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../services/profile-jira.service'
import { Jira } from "../interfaces/Jira";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

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
  issue: string;
  componente: string;
  successSave :boolean;
  errorSave : boolean;
  editing : boolean;
  jiraExistente :boolean;
  id : string;
  jiraId: string;
  registerForm: FormGroup;
  submitted = false;
  loanding: boolean;
  mensaggeSaveSuccess =  "Cuenta insertada correctamente.";

  constructor(private router: Router,private jiraService: ProfileJiraService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id  = localStorage.getItem('id');
    console.log(this.id);
    this.loanding = true;
    this.getUserJira();
    this.generateRegisterFormModel();
  }

  saveUserJira(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const saveAccountJira: Jira = 
    {  
      id : this.jiraId,
      user_id : this.id,
      username : this.username,
      password: this.password,
      url: this.url,
      proyect: this.proyecto,
      componente: this.componente,
      issue : this.issue
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
    this.cambiarEdicion();
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const updateAccountJira: Jira = 
    {  
      id : this.jiraId,
      user_id : this.id,
      username : this.username,
      password: this.password,
      url: this.url,
      proyect: this.proyecto,
      componente: this.componente,
      issue : this.issue
    }
    this.jiraService.updateUserJira(this.id,updateAccountJira).then(res => {
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

  getUserJira(){
    this.jiraService.getUserJira(this.id).then(res => {
      this.loanding = false;
      let element : Jira = res;
      this.jiraId = element.id;
      this.username = element.username;
      this.password = element.password;
      this.url = element.url;
      this.proyecto = element.proyect;
      this.componente = element.componente;
      this.issue = element.issue;
      this.jiraExistente = true;
    })
    .catch( () => {
      this.loanding = false;
      this.jiraExistente = false;
    });
  }

  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      url: ['', Validators.required],
      proyecto: ['', Validators.required],
      componente: ['', Validators.required],
    });
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

}

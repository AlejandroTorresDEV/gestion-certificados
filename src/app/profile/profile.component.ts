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

  url: string = "https://proyectogeekshubsgtt.atlassian.net";
  proyecto: string = "SIT";
  issue: string = "Explotacion";
  componente: string = "Arquitectura";

  editing : boolean;
  jiraExistente :boolean;
  id : string;
  jiraId: string;
  registerForm: FormGroup;
  submitted = false;
  AccountJira : Jira;
  loanding: boolean;

  successSave :boolean;
  errorSave : boolean;

  mensaggeError = "Ha ocurrido un error. Vuelva a intentarlo."
  mensaggeSaveSuccess =  "Cuenta insertada correctamente.";

  constructor(private router: Router,private jiraService: ProfileJiraService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id  = localStorage.getItem('id');
    this.loanding = true;
    this.getUserJira();
    this.generateRegisterFormModel();
  }

    //Guardamos el Jira del cliente logeado.
  saveUserJira(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
       this.createNewModelJira();

    this.jiraService.saveUserJira(this.AccountJira).then(res => {
      console.log(res);
      this.successSave = true;
    })
    .catch(error => {
      console.log(error);
      this.errorSave = true;
    });;

  }

  //Actualizamos el Jira del cliente logeado.
  updateUserJira(){
    this.cambiarEdicion();
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.createNewModelJira();
    this.jiraService.updateUserJira(this.id,this.AccountJira).then(res => {
      this.successSave = true;
    })
    .catch(error => {
      this.errorSave = true;
    });;
  }

  cambiarEdicion(){
    this.editing = !this.editing;
  }

  //Obtenemos los datos de de Jira del cliente logeado.
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

  createNewModelJira(){
    this.AccountJira  = 
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
  }

  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      url: ['', Validators.required],
      proyecto: ['', Validators.required],
      componente: ['', Validators.required],
      issue : ['', Validators.required]
    });
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

}

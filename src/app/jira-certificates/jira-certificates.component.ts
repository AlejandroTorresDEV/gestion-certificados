import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../services/profile-jira.service';
import {CertificateService} from '../services/certificate.service';
import { Jira } from '../interfaces/Jira';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificates } from '../interfaces/Certificates';

@Component({
  selector: 'app-jira-certificates',
  templateUrl: './jira-certificates.component.html',
  styleUrls: ['./jira-certificates.component.css']
})
export class JiraCertificatesComponent implements OnInit {

  idCertificado : any;
  idUser: any;
  jiraAccount : Jira;
  certificateModel : any;
  tokenLoginJira : any;

  loanding: boolean;
  registerForm: FormGroup;
  submitted = false;

  dataTicket : any;
  username: string;
  password : string;

  constructor( private formBuilder: FormBuilder,private certificateService : CertificateService ,private profileJiraService: ProfileJiraService,private route: ActivatedRoute, ) {
    this.idCertificado = this.route.snapshot.paramMap.get('id');
    this.idUser= localStorage.getItem('id');
  }

  ngOnInit() {
    this.generateRegisterFormModel();
    this.loanding = true;
    this.getUserJira();
    this.getCertificate();
  }

  getCertificate(){
    this.certificateService.getCertificate(this.idCertificado).then(res => {
      this.certificateModel = res;
      this.loanding = false;
      console.log(this.certificateModel);
    })
    .catch(error => {
      this.loanding = false;
      console.log(error);
    });;
  }

  getUserJira(){
    this.profileJiraService.getUserJira(this.idUser).then(res => {
      this.jiraAccount = res;
      this.username = this.jiraAccount.username;
    })
    .catch(error => {
      console.log(error);
    });;
  }

  createTicket(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.password = this.registerForm.value.password;
    this.loginJira();
  }

  loginJira(){
    this.profileJiraService.loginJira(this.username,this.password).then((res: { session: any}) => {
      this.tokenLoginJira = res.session.value;
      this.createObjectTicket();
      this.profileJiraService.postIssueJira(this.username,this.password,  this.dataTicket,this.certificateModel);
    })
    .catch(error => {
      console.log(error);
    });;
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

  createObjectTicket(){
    this.dataTicket = {
      "fields": {
        "project":
        {
          "key": this.jiraAccount.proyect
        },
        "summary": "Certificado a punto de caducar -> "+this.certificateModel.username,
        "description": "Incidencia subida por el usuario ID:"+this.idUser+
        "\n DATOS CERTIFICADO -->"+this.certificateModel.id_orga+"\nID_ORG : "+this.certificateModel.id_orga,
        "issuetype": {
          "name": this.jiraAccount.issue
        }
      }
    }
  }
  
  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
}

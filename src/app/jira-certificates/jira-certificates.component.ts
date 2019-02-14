import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../services/profile-jira.service';
import {CertificateService} from '../services/certificate.service';
import { Jira } from '../interfaces/Jira';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificate } from 'crypto';
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

  loginJira(){
    this.profileJiraService.loginJira(this.username,"111").then((res: { session: any}) => {
      this.tokenLoginJira = res.session.value;
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

    this.loginJira();


  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
}

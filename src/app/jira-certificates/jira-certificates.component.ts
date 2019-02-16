import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../services/profile-jira.service';
import {CertificateService} from '../services/certificate.service';
import { Jira } from '../interfaces/Jira';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

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

  loginJiraError: boolean;
  createTicketSucces : boolean;

  mensaggeSuccesSave = "Certificado subido correctamente a Jira";
  mensaggeErrorLogin = "Las credenciales de Jira son incorrectas";

  constructor(private router : Router ,private formBuilder: FormBuilder,private certificateService : CertificateService ,private profileJiraService: ProfileJiraService,private route: ActivatedRoute, ) {
    this.idCertificado = this.route.snapshot.paramMap.get('id');
    this.idUser= localStorage.getItem('id');
  }

  ngOnInit() {
    this.generateRegisterFormModel();
    this.getUserJira();
    this.getCertificate();

    this.loanding = true;
    this.createTicketSucces = false;
    this.loginJiraError = false;
  }

  //Obtenemos los datos del certificado para poder obtener su informacion.
  getCertificate(){
    this.certificateService.getCertificate(this.idCertificado).then(res => {
      this.certificateModel = res;
      this.loanding = false;
    })
    .catch(() => {
      this.loanding = false;
    });;
  }

  //Obtenemos los datos del Jira del cliente para poder crear la incidencia.
  getUserJira(){
    this.profileJiraService.getUserJira(this.idUser).then(res => {
      this.jiraAccount = res;
      this.username = this.jiraAccount.username;
    })
    .catch(() => {
      //Si el cliente no tiene cuenta de Jira se le redirigirá al componente de crear cuenta de Jira. 
      this.router.navigate(['/profile']);
    });;
  }

  //Metodo para crear ticket en Jira.
  createTicket(){
    this.loanding = true;
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.loanding = false;
      return;
    }
    this.password = this.registerForm.value.password;
    this.loginJira();
  }

  //Método para hacer login en Jira , si el login ha sido correcto creamos la incidencia en el panel de jira. 
  loginJira(){
    this.profileJiraService.loginJira(this.username,this.password)
    .then((res: { session: any}) => {
      this.tokenLoginJira = res.session.value;
      this.createObjectTicket();
      //Si el login ha sido correcto llamamos al endpoint y le mandamos los datos del usuario , el modelo del ticket , y el modelo del certificado.
      this.profileJiraService.postIssueJira(this.username,this.password,this.dataTicket,this.certificateModel);
      this.createTicketSucces = true;
      this.loginJiraError = false;
      this.loanding = false;
    })
    .catch(() => {
      this.loanding = false;
      this.createTicketSucces = false;
      this.loginJiraError = true;
    });;
  }

  createObjectTicket(){
    this.dataTicket = {
      "fields": {
        "project":
        {
          "key": this.jiraAccount.proyect
        },
        "summary": "Certificado a punto de caducar -> "+this.certificateModel.alias,
        "description": "Incidencia subida por el usuario ID:"+this.idUser+
        "\n DATOS CERTIFICADO -->"+this.certificateModel.id_orga+"\nID_ORG : "+this.certificateModel.id_orga+"\nSUBJECT : "+this.certificateModel.subject,
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

  getFormsControls(): any {
    return this.registerForm.controls;
  }
  
}

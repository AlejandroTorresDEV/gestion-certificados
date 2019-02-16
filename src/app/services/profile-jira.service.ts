import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira } from "../interfaces/Jira";
import { HttpHeaders } from '@angular/common/http';
import { Base64 } from 'js-base64';
import {CertificateService} from '../services/certificate.service';
import { Certificates } from '../interfaces/Certificates';

@Injectable({
  providedIn: 'root'
})
export class ProfileJiraService {

  data: any;
  objJsonB64: any;
  
  URL_JIRA_BD = '/api/jira/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    })
  };

  httpOptionsJiraLogin = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'User-Agent': 'xx',
    })
  };

  constructor(private certificateService: CertificateService, private http: HttpClient, private router: Router) { }

  loginJira(username: String, password: String) {
    const data = { username, password };
    return this.http.post('/rest/auth/1/session', data, this.httpOptionsJiraLogin).toPromise();
  }

  updateUserJira(id, body: Jira) {
    return this.http.put(this.URL_JIRA_BD + body.id, body, this.httpOptions).toPromise();
  }

  saveUserJira(body: Jira): any {
    return this.http.post(this.URL_JIRA_BD, body, this.httpOptions).toPromise();
  }

  getUserJira(id): any {
    return new Promise((resolve, reject) => {
      this.http.get(this.URL_JIRA_BD + id, this.httpOptions).toPromise().then((res) => {
        resolve(res);
      }).catch(() => {
        reject(404);
      });
    });
  }

  postIssueJira(username: String, password: String,dataTicket:any,certificate: Certificates) {

    //Codificamos el username y la password para enviarselo por la cabecera Authorization.
    this.objJsonB64 = Base64.encode(username + ":" + password);
    
    console.log(dataTicket);
    //Creamos las cabeceras para el post.
    const httpOptionsJiraPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'User-Agent': 'xx',
        "Authorization": `Basic ${this.objJsonB64}`
      })
    };
    
    //Enviamos la peticion con los datos a la api publica de jira.
    this.http.post('/rest/api/2/issue', dataTicket, httpOptionsJiraPost).toPromise().then(res => {
      certificate.estado = 3;
      certificate.eliminado = true;
      console.log(certificate);
      this.certificateService.activateCertificate(certificate,0).then(res => { console.log(res)}).catch((error) => {
        console.log(error)
      });;

    }).catch((error) => {
        console.log(error)
      });;
  }

}

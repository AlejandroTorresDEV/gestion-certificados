import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira } from "../interfaces/Jira";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileJiraService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    })
  };

  constructor(private http: HttpClient, private router: Router) {}

  saveUserJira(body: Jira): any {
    console.log("hola");
    return this.http.post('/api/jira', body).toPromise();
  }

  getUserJira(id): any {
    return new Promise((resolve, reject) => {
      this.http.get('/api/jira/' + id, this.httpOptions).toPromise().then((res) => {
        resolve(res);
      }).catch((error) => {
          reject(404);
        });
    });
  }

  updateUserJira(id, body: Jira) {
    return this.http.put('/api/jira/' + body.id, body).toPromise();
  }

  saveCertificate(alias){
    let entidad_emisiora = 22;
    const body = {alias,entidad_emisiora};
    return this.http.post('/api/certificate',body).toPromise();
  }

}

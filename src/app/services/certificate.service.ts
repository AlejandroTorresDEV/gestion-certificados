import { Injectable } from '@angular/core';
import { Certificates } from "../interfaces/Certificates";
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }
  data: any;


  getpRUEBA() {

    this.data = {
      "fields": {
         "project":
      {
         "key": "SIT"
      },
         "summary": "Certificado administración",
         "description": "Incidencia subida por el usuario [RAMON]",
         "issuetype": {
         "name": "Task"
         }
         }
      }


    /* this.data = {
 	
       "username":"ALEX-ILICITANO15@hotmail.com",
         "password":"alex1234"
     
     }*/

    console.log(this.data);

     /*this.http.post('/rest/auth/1/session', this.data, this.httpOptions).toPromise().then(res => {
      console.log(res);
    })
      .catch((error) => {
        console.log(error)
      });;*/

    /*this.http.post('/rest/api/2/issue', this.data, this.httpOptions).toPromise().then(res => {
      console.log(res);
    })
      .catch((error) => {
        console.log(error)
      });;*/
  }

  getCertificate(id) {
    return this.http.get('/api/certificate/' + id).toPromise();
  }

  getAllCertificates() {
    return this.http.get('/api/certificate').toPromise();
  }

  deleteCertificate(certificado) {
    return this.http.put('/api/certificate/' + certificado.id, certificado).toPromise();
  }

  activateCertificate(certificado, accion) {
    return this.http.put('/api/certificate/' + accion, certificado).toPromise();
  }

  saveCertificates(certificate) {
    return this.http.post('/api/certificate', certificate).toPromise();
  }
}

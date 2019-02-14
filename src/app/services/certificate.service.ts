import { Injectable } from '@angular/core';
import { Certificates } from "../interfaces/Certificates";
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }
  data: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'X-Atlassian-Token': 'nocheck',
      'User-Agent': 'xx',
      'Authorization': 'eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Nlc3Npb24tc2VydmljZSIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YzYzZWI2ZDIzOWUwOTVjMGRkMjNlODciLCJhdWQiOiJhdGxhc3NpYW4iLCJpbXBlcnNvbmF0aW9uIjpbXSwibmJmIjoxNTUwMDkzNjc3LCJyZWZyZXNoVGltZW91dCI6MTU1MDA5NDI3NywiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiYTY3NmUzODAtZmFkYS00MWYzLWFkZGYtZDE3MDliN2MwYWE3IiwiZXhwIjoxNTUyNjg1Njc3LCJpYXQiOjE1NTAwOTM2NzcsImVtYWlsIjoiYWxleC1pbGljaXRhbm8xNUBob3RtYWlsLmNvbSIsImp0aSI6ImE2NzZlMzgwLWZhZGEtNDFmMy1hZGRmLWQxNzA5YjdjMGFhNyJ9.ZYIENCsmD0wtmMU3X7TWdR_RAaa8vDWgurk_eyV4AEDzVUpcaWDQkCG1EiwFi1BetNLkr-QD_R4U7g-LKy0ZEH2k22_cvFOZBb9zXDPtXXndeggQukc3ma433YTwWOW7eSAu2t972a4SoOxSH-_7TsGKw3Hwp22PColkWEphZGU5ZPczbXQHFg5N2A2htRFnzbVkqO3rp0HSGHQH2mQ9JK3fxVrcBaaMEgqdZDpmag7Adg9pNFcufL8zDpGO3vg38v1b9sgLsnYQQFpyNPUXL8yuWraXSno4b_OP7ioO7PZabeujVtcBYP2K0Qz2MbOUuOYE9mebsjoGp3uOqfCPMA'
    })
  };

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

    this.http.post('/rest/api/2/issue', this.data, this.httpOptions).toPromise().then(res => {
      console.log(res);
    })
      .catch((error) => {
        console.log(error)
      });;
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira } from "../interfaces/Jira";
import { HttpHeaders } from '@angular/common/http';
import { Base64 } from 'js-base64';
@Injectable({
  providedIn: 'root'
})
export class ProfileJiraService {

  data: any;

  objJsonB64;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    })
  };

  httpOptionsJiraLogin = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'X-Atlassian-Token': 'nocheck',
      'User-Agent': 'xx',
      //'Authorization': 'eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Nlc3Npb24tc2VydmljZSIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YzYzZWI2ZDIzOWUwOTVjMGRkMjNlODciLCJhdWQiOiJhdGxhc3NpYW4iLCJpbXBlcnNvbmF0aW9uIjpbXSwibmJmIjoxNTUwMDkzNjc3LCJyZWZyZXNoVGltZW91dCI6MTU1MDA5NDI3NywiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiYTY3NmUzODAtZmFkYS00MWYzLWFkZGYtZDE3MDliN2MwYWE3IiwiZXhwIjoxNTUyNjg1Njc3LCJpYXQiOjE1NTAwOTM2NzcsImVtYWlsIjoiYWxleC1pbGljaXRhbm8xNUBob3RtYWlsLmNvbSIsImp0aSI6ImE2NzZlMzgwLWZhZGEtNDFmMy1hZGRmLWQxNzA5YjdjMGFhNyJ9.ZYIENCsmD0wtmMU3X7TWdR_RAaa8vDWgurk_eyV4AEDzVUpcaWDQkCG1EiwFi1BetNLkr-QD_R4U7g-LKy0ZEH2k22_cvFOZBb9zXDPtXXndeggQukc3ma433YTwWOW7eSAu2t972a4SoOxSH-_7TsGKw3Hwp22PColkWEphZGU5ZPczbXQHFg5N2A2htRFnzbVkqO3rp0HSGHQH2mQ9JK3fxVrcBaaMEgqdZDpmag7Adg9pNFcufL8zDpGO3vg38v1b9sgLsnYQQFpyNPUXL8yuWraXSno4b_OP7ioO7PZabeujVtcBYP2K0Qz2MbOUuOYE9mebsjoGp3uOqfCPMA'
    })
  };

  httpOptionsJiraPost = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json',
      //'X-Atlassian-Token': 'nocheck',
      'User-Agent': 'xx',
      "Authorization": 'Basic YWxleC1pbGljaXRhbm8xNUBob3RtYWlsLmNvbTphbGV4MTIzNA=='
    })
  };

  constructor(private http: HttpClient, private router: Router) {}


  loginJira(username: String, password: String){
    const data = {username, password};
    return this.http.post('/rest/auth/1/session',data, this.httpOptionsJiraLogin).toPromise();
  }

  saveUserJira(body: Jira): any {
    return this.http.post('/api/jira', body, this.httpOptions).toPromise();
  }

  postIssueJira(username: String, password: String){
    username = "alex-ilicitano15@hotmail.com";
    password = "alex1234";

    console.log("ENCODE");
    this.objJsonB64 = Base64.encode("alex-ilicitano15@hotmail.com:alex1234");
    console.log(this.objJsonB64);

    console.log("DECODE");
    const objJsonB64dECODE = Base64.decode(this.objJsonB64);

    console.log(objJsonB64dECODE);

    console.log('Basic ${this.objJsonB64}');

    this.data = {
      "fields": {
         "project":
      {
         "key": "SIT"
      },
         "summary": "Certificado administración",
         "description": "Incidencia subida por el usuario [RAMON]",
         "issuetype": {
         "name": "Explotacion"
         }
         }
      }

      this.http.post('/rest/api/2/issue', this.data, this.httpOptionsJiraPost).toPromise().then(res => {
        console.log(res);
      })
        .catch((error) => {
          console.log(error)
        });;
  
      
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
    return this.http.put('/api/jira/' + body.id, body, this.httpOptions).toPromise();
  }
  
}

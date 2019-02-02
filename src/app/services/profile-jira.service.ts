import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira } from "../interfaces/Jira";

@Injectable({
  providedIn: 'root'
})
export class ProfileJiraService {

  constructor(private http: HttpClient,private router:Router) { }

  saveUserJira(body : Jira) : any{
    return this.http.post('/api/jira', body).toPromise();
  }

  getUserJira(id) :any{
    return new Promise((resolve, reject) => {
      this.http.get('/api/jira/'+id).toPromise().then((res) => {
          resolve(res);
        })
        .catch(() => {
          reject(404);
        });
    });
  }

  updateUserJira(id,body : Jira){
    return this.http.put('/api/jira/'+body.id, body).toPromise();
  }

}

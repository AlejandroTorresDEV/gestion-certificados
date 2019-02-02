import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira } from "../app/interfaces/Jira";
@Injectable({
  providedIn: 'root'
})
export class ProfileJiraService {

  constructor(private http: HttpClient,private router:Router) { 
    
  }


  saveUserJira(body : Jira) : any{
    console.log(body);
    return this.http.post('/api/jira', body).toPromise();
  }

  getUserJira() :any{
    return this.http.get('/api/jira/'+"1").toPromise();
  }
  
}

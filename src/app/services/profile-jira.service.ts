import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Jira } from "../interfaces/Jira";
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

  
}

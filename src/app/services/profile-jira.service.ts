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


  saveUserJira(username,password,url,proyect,componente ) : any{
    const body = {username,password,url,proyect,componente};
    return this.http.post('/api/jira', body).toPromise();
  }

}

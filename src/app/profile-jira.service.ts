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


  saveUserJira(cuentaJira : Jira ){
    console.log("Cuneta --->"+cuentaJira);
  }

}

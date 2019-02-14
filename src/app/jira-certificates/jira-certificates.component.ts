import { Component, OnInit } from '@angular/core';
import {ProfileJiraService} from '../services/profile-jira.service';
import { Jira } from '../interfaces/Jira';

@Component({
  selector: 'app-jira-certificates',
  templateUrl: './jira-certificates.component.html',
  styleUrls: ['./jira-certificates.component.css']
})
export class JiraCertificatesComponent implements OnInit {
  

  id: any;
  jiraAccount : Jira;

  constructor(private profileJiraService: ProfileJiraService ) {
    this.id = localStorage.getItem('id');
  }



  ngOnInit() {
    this.getUserJira();
  }


  getUserJira(){
    this.profileJiraService.getUserJira(this.id).then(res => {
      this.jiraAccount = res;
      console.log(this.jiraAccount);
    })
    .catch(error => {
      console.log(error);
    });;;

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-certificates',
  templateUrl: './jira-certificates.component.html',
  styleUrls: ['./jira-certificates.component.css']
})
export class JiraCertificatesComponent implements OnInit {


  colours = [
    {name : "white"},
    {name: "blue"},
    {name: "red"},
    {name: "yellow"}
  ];
  
  constructor() { }


  ngOnInit() {
  }

}

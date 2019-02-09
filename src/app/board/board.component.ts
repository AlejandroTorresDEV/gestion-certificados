import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    
  showUsers : boolean;
  showCertificates : boolean;

  constructor() { }

  ngOnInit() {
    this.showUsers = false;
    this.showCertificates = false;
  }

  activateShowCertificate(){
    this.showCertificates = true;
    this.showUsers = false;

  }

  activateShowUsers(){
    this.showUsers = true;
    this.showCertificates = false;
  }

}

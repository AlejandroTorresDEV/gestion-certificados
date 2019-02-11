import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../services/certificate.service'
@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {

  certificates : any;

  findCertificates = [
    {name : "Alias"},
    {name: "Subject"},
    {name: "Caducidad"},
    {name: "Id-Org"}
  ];

  constructor(private certificateService : CertificateService) { }

  ngOnInit() {
    this.getAllCertificates();
  }

  getAllCertificates(){
    this.certificateService.getAllCertificates().then(res => {
      this.certificates = res;
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
  }

  orderAlias(){
    this.certificates = this.certificates.sort((a,b) =>
      a.alias > b.alias ? 1 : -1
    );
  }
  orderSubject(){
    this.certificates = this.certificates.sort((a,b) =>
      a.subject > b.subject ? 1 : -1
    );
  }

  orderDate(){
    this.certificates = this.certificates.sort((a,b) =>
      a.caducidad.split("T")[0] > b.caducidad.split("T")[0] ? 1 : -1
    );
  }

  orderContact(){
    this.certificates = this.certificates.sort((a,b) =>
    a.contacto > b.contacto ? 1 : -1
  );
  }
}

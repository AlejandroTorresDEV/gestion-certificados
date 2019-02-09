import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../services/certificate.service'
@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {

  certificates : any;

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
  orderID_ORG(){
    this.certificates = this.certificates.sort((a,b) =>
      a.id_org > b.id_org ? 1 : -1
    );
  }

  orderClient(){
    this.certificates = this.certificates.sort((a,b) =>
      a.cliente > b.cliente ? 1 : -1
    );
  }

  orderContact(){
    this.certificates = this.certificates.sort((a,b) =>
    a.contacto > b.contacto ? 1 : -1
  );
  }
}

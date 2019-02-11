import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../services/certificate.service'
import { Certificate } from 'crypto';
@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {
  selectedOption: string;
  option: string;
  certificates : any;
  copyDataCertificates = this.certificates;
  textBusqueda :string;

  findCertificates = [
    {name : "Alias"},
    {name: "Caducidad"},
    {name: "Id-Org"}
  ];

  constructor(private certificateService : CertificateService) { }

  ngOnInit() {
    this.getAllCertificates();
    this.selectedOption = this.findCertificates[0].name;
  }


  findCertificate(){

    this.option = this.selectedOption;
    if(this.copyDataCertificates == null){
      this.copyDataCertificates = this.certificates;
    }

    switch(this.option){

      case "Alias" : {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.alias.includes(this.textBusqueda));
        this.certificates = result;
        break;
      }

      case "Caducidad" : {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.caducidad.includes(this.textBusqueda));
        this.certificates = result;
        break;
      }
 
      case "Id-Org" : {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.id_orga.includes(this.textBusqueda));
        this.certificates = result;
        break;
      }
    }
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

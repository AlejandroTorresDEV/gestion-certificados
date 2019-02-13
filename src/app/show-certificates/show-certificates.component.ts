import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../services/certificate.service'
import { Certificates } from '../interfaces/Certificates';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {

  certificates: any;
  certificatesCaducado: Certificates[] = [];
  copyDataCertificates = this.certificates;

  loanding: boolean;
  badgeCount: number;

  selectedOption: string;
  option: string;
  textBusqueda: string;

  findCertificates = [
    { name: "Alias" },
    { name: "Caducidad" },
    { name: "Id-Org" },
    { name: "Eliminados" },
    { name: "No-Eliminados" }
  ];

  orderBooleanAlias: boolean;
  orderBooleanSubject: boolean;
  orderBooleanDate: boolean;
  orderBooleanContact: boolean;

  constructor(private router: Router, private certificateService: CertificateService) { }

  ngOnInit() {
    this.getAllCertificates();
    this.selectedOption = this.findCertificates[0].name;
  }

  //Método para buscar certificado por filtro
  findCertificate() {
    this.option = this.selectedOption;
    if (this.copyDataCertificates == null) {
      this.copyDataCertificates = this.certificates;
    }

    switch (this.option) {

      case "Alias": {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.alias.includes(this.textBusqueda));
        this.certificates = result;
        break;
      }

      case "Caducidad": {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.caducidad.includes(this.textBusqueda));
        this.certificates = result;
        break;
      }

      case "Id-Org": {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.id_orga.includes(this.textBusqueda));
        this.certificates = result;
        break;
      }

      case "Eliminados": {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.eliminado === true);
        this.certificates = result;
        break;
      }

      case "No-Eliminados": {
        const result = this.copyDataCertificates.filter(
          certificate => certificate.eliminado === false);
        this.certificates = result;
        break;
      }
    }
  }

  redirectCaducadosCertificates() {
    //this.router.navigate(['/jira-certificate']);
    if (this.copyDataCertificates == null) {
      this.copyDataCertificates = this.certificates;
    }
    const result = this.copyDataCertificates.filter(
      certificate => certificate.caducado === true);
    this.certificates = result;
  }

  getAllCertificates() {
    this.loanding = true;
    this.certificateService.getAllCertificates().then(res => {
      this.certificates = res;
      this.loanding = false;
      this.getAllCertificatesCaducade();
    })
      .catch(() => {
        this.loanding = false;
      });
  }

  getAllCertificatesCaducade() {
    for (let certi of this.certificates) {
      if (certi.caducado) {
        this.certificatesCaducado.push(certi);
      }
    }
    this.badgeCount = this.certificatesCaducado.length;
  }

  orderAlias() {
    if (this.orderBooleanAlias) {
      this.orderBooleanAlias = false;
      this.certificates = this.certificates.sort((a, b) =>
        a.alias > b.alias ? 1 : -1
      );
    } else {
      this.orderBooleanAlias = true;
      this.certificates = this.certificates.sort((a, b) =>
        a.alias < b.alias ? 1 : -1
      );
    }
  }

  orderSubject() {
    if (this.orderBooleanSubject) {
      this.orderBooleanSubject = false;
      this.certificates = this.certificates.sort((a, b) =>
        a.Subject > b.Subject ? 1 : -1
      );
    } else {
      this.orderBooleanSubject = true;
      this.certificates = this.certificates.sort((a, b) =>
        a.Subject < b.Subject ? 1 : -1
      );
    }
  }

  orderDate() {
    if (this.orderBooleanDate) {
      this.orderBooleanDate = false;
      this.certificates = this.certificates.sort((a, b) =>
        a.caducidad > b.caducidad ? 1 : -1
      );
    } else {
      this.orderBooleanDate = true;
      this.certificates = this.certificates.sort((a, b) =>
        a.caducidad < b.caducidad ? 1 : -1);
    }
  }

  orderContact() {
    if (this.orderBooleanContact) {
      this.orderBooleanContact = false;
      this.certificates = this.certificates.sort((a, b) =>
        a.id_orga > b.id_orga ? 1 : -1
      );
    } else {
      this.orderBooleanContact = true;
      this.certificates = this.certificates.sort((a, b) =>
        a.id_orga < b.id_orga ? 1 : -1
      );
    }
  }
}

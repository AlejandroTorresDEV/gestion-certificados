import { Component, OnInit } from '@angular/core';
import { Certificate } from 'crypto';

@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {

  certificates = [
  {
    alias : "Alias",
    id_org : "Id_ordsdsdsdssdsdsddsg",
    cliente: "Cliente",
    contacto: "pepeelmejor@gmail.com",
    acciones : "Acciones"
  },
  {
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "AAAAlias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "ddsdsdsAlias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "dssddsdsAlias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "zAlias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "gAlias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "pepe",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },{
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },
  ];

  constructor() { }

  ngOnInit() {
  }

  searchAlias(){
    this.certificates = this.certificates.sort((a,b) =>
      a.alias > b.alias ? 1 : -1
    );
  }
}

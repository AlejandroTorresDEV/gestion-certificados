import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit {
  @Input() certificates: Certificates;

  /*
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
    alias : "Alias",
    id_org : "Id_org",
    cliente: "Cliente",
    contacto: "Contacto",
    acciones : "Acciones"
  },
  ];
  */

  constructor() { }

  ngOnInit() {
  }


}

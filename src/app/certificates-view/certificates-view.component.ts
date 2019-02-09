import { Component, OnInit, Input } from '@angular/core';
import { Certificates } from './../interfaces/Certificates';
import { AuthServiceService } from "../services/auth-service.service";
import { CertificateService } from "../services/certificate.service";

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit {
  @Input() certificates: Certificates;
  isAdmin : boolean;

  constructor(private certificateService: CertificateService,private authService : AuthServiceService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }

  updateFile(file: HTMLInputElement) {
    let name = file.value;
  }

  deleteCertificate(certificado: Certificates){
    certificado.eliminado = true;
    this.certificateService.deleteCertificate(certificado)  
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
  }

  dowloadFile(nombreFichero: string , fileStringBase64 : string){  
    let contentType = 'file/pfx';
    let byteCharacters = atob(fileStringBase64);
  
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    let byteArray = new Uint8Array(byteNumbers);
  
    let blob = new Blob([byteArray], {type: contentType});
  
    let atag = document.createElement("a");
    
  
    atag.href = URL.createObjectURL(blob);
    atag.download = nombreFichero;
    /* Añadido elemento para descargar el fichero en el navegador mozilla */
    document.body.appendChild(atag);
    atag.click();
    console.log(blob);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Certificates } from './../interfaces/Certificates';
import { AuthServiceService } from "../services/auth-service.service";
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit {
  @Input() certificates: Certificates;
  isAdmin : boolean;

  fileBase64 = "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";

  constructor(private authService:AuthServiceService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }

  updateFile(file: HTMLInputElement) {
    let name = file.value;
    let file2 = name.split(".");
    console.log(name.split(".")[1]);
    console.log(name.split(".")[2]);

  }

  dowloadFile(){  
    var contentType = 'file/pfx';
    var byteCharacters = atob(this.fileBase64);
  
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    var byteArray = new Uint8Array(byteNumbers);
  
    var blob = new Blob([byteArray], {type: contentType});
  
    var atag = document.createElement("a");
    
  
    atag.href = URL.createObjectURL(blob);
    atag.download = "fichero2.pfx";
    /* Añadido elemento para descargar el fichero en el navegador mozilla */
    document.body.appendChild(atag);
    atag.click();
    console.log(blob);
  }

}

import { Injectable } from '@angular/core';
import { Certificates } from "../interfaces/Certificates";
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  data: any;
  URL_CERTIFICATE = '/api/certificate/';

  constructor(private http: HttpClient) { }  
  
  getCertificate(id) {
    return this.http.get(this.URL_CERTIFICATE + id).toPromise();
  }

  getAllCertificates() {
    return this.http.get(this.URL_CERTIFICATE).toPromise();
  }

  deleteCertificate(certificado) {
    return this.http.put(this.URL_CERTIFICATE + certificado.id, certificado).toPromise();
  }

  activateCertificate(certificado, accion) {
    return this.http.put(this.URL_CERTIFICATE + accion, certificado).toPromise();
  }

  saveCertificates(certificate) {
    return this.http.post(this.URL_CERTIFICATE, certificate).toPromise();
  }
}

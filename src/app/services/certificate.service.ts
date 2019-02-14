import { Injectable } from '@angular/core';
import { Certificates } from "../interfaces/Certificates";
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }
  data: any;
  
  
  getCertificate(id) {
    return this.http.get('/api/certificate/' + id).toPromise();
  }

  getAllCertificates() {
    return this.http.get('/api/certificate').toPromise();
  }

  deleteCertificate(certificado) {
    return this.http.put('/api/certificate/' + certificado.id, certificado).toPromise();
  }

  activateCertificate(certificado, accion) {
    return this.http.put('/api/certificate/' + accion, certificado).toPromise();
  }

  saveCertificates(certificate) {
    return this.http.post('/api/certificate', certificate).toPromise();
  }
}

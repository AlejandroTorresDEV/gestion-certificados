import { Injectable } from '@angular/core';
import { Certificates } from "../interfaces/Certificates";
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }


  getAllCertificates(){
    return this.http.get('/api/certificate').toPromise();
  }

  deleteCertificate(certificado){
    console.log(certificado);
    return this.http.put('/api/certificate/'+certificado.id,certificado).toPromise();
  }

  activateCertificate(certificado){
    console.log(certificado);
    return this.http.put('/api/certificate/'+certificado.id,certificado).toPromise();
  }

  saveCertificates(certificate){
    console.log(certificate);
    return this.http.post('/api/certificate',certificate).toPromise();
  }
}

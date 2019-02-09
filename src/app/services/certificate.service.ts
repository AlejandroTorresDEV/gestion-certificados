import { Injectable } from '@angular/core';
import { Certificates } from "../interfaces/Certificates";
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }


  saveCertificate(certificate: Certificates){
    const body = {certificate};
    return this.http.post('/api/certificate',body).toPromise();
  }
}

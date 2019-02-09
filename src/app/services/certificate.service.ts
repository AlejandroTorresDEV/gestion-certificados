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

  saveCertificates(certificate){
    console.log(certificate);
    return this.http.post('/api/certificate',certificate).toPromise();
  }
}

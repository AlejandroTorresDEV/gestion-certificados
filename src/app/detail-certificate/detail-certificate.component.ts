import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { CertificateService } from "../services/certificate.service";

@Component({
  selector: 'app-detail-certificate',
  templateUrl: './detail-certificate.component.html',
  styleUrls: ['./detail-certificate.component.css']
})
export class DetailCertificateComponent implements OnInit {

  certificate : any;
  idCertificado;
  loanding : boolean;

  constructor(private route: ActivatedRoute,private certificateService: CertificateService) {
     this.idCertificado = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.loanding = false;
    this.getCertificate();
  }

  getCertificate(){
    this.loanding = true;
    this.certificateService.getCertificate(this.idCertificado).then(res => {
      this.certificate = res;
      console.log(res);
      this.loanding = false;
    })
    .catch(error => {
      this.loanding = false;
      console.log(error);
    });;
  }

}

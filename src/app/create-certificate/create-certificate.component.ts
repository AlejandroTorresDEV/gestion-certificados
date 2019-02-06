import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  afuConfig = {
    multiple: false,
    formatsAllowed: ".pfx",
    maxSize: "10",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
      }
    },
};

}

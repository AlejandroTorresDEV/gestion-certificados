import { Component, OnInit, Input } from '@angular/core';
import { Certificates } from './../interfaces/Certificates';
@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit {
  @Input() certificates: Certificates;

  constructor() { }

  ngOnInit() {
  }


}

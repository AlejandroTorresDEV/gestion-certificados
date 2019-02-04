import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit {

  colours = [
    {ayuntamiento : "white"},
    {ayuntamiento: "blue"},
    {ayuntamiento: "red"},
    {ayuntamiento: "yellow"},
    {ayuntamiento : "white"},
    {ayuntamiento: "blue"},
    {ayuntamiento: "red"},
    {ayuntamiento : "white"},
    {ayuntamiento: "blue"},
    {ayuntamiento: "red"},
    {ayuntamiento: "yellow"},
    {ayuntamiento : "white"},
    {ayuntamiento: "blue"},
    {ayuntamiento: "red"}
  ];

  constructor() { }

  ngOnInit() {
  }

}

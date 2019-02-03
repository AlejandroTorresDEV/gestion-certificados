import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

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

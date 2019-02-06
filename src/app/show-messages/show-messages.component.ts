import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css']
})
export class ShowMessagesComponent implements OnInit {
  @Input() mens : string;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../services/auth-service.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin : boolean;

  constructor(private authService:AuthServiceService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
  }


  logOut(){
    this.authService.logOutUser();
  }
}

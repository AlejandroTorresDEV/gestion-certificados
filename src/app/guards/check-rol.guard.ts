import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from "../services/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class CheckRolGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(){
    let rolUser = this.authService.getRolUser();
    if (rolUser != 'admin') {
      console.log("hola");
        return false;
    } 
      return true;
  }
}

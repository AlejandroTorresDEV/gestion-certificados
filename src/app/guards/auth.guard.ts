import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from "../services/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(){
    let rolUser = this.authService.getRolUser();
    if (rolUser == 'visor') {
        return false;
    }
      return true;
  }
}

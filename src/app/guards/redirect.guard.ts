import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from "../services/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
 
  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate() {
    if (this.authService.getToken()) {
      this.router.navigate(['/certificates-view']);
      return false;
    }else{
      return true;
    }
  }
}

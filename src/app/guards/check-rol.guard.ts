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
    if (this.authService.getToken()) {
        return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

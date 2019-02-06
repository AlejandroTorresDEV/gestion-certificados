import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(username: String, password: String): any {
    const body = { username, password };

    return new Promise((resolve, reject) => {
      this.http
        .post('/api/auth', body)
        .toPromise()
        .then((res: { statusCode: number, jwt: string, id: string, rolUser: string }) => {
          if (res.statusCode === 200) {
            console.log(res);
            this.saveUserDataInLocalStorage(res);
            resolve(res.statusCode);
          } else if (res.statusCode === 204) {
            resolve(res.statusCode);
          }
        })
        .catch(error => {
          reject(404);
        });
    });
  }

  registerUser(username: string, email: string, password: string, rolUser: string): any {
    const body = { username, email, password, rolUser };
    return this.http.post('/api/users', body).toPromise();
  }

  getToken(): boolean {
    let jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      return true;
    }
      return false;
  }

  getRolUser(): any {
    let rolUser = localStorage.getItem('rol');
    return rolUser;
  }

  isAdmin(): boolean {
    let rolUser = localStorage.getItem('rol');
    if (rolUser != 'admin') {
      return false;
    } 
      return true;
  }

  saveUserDataInLocalStorage(res) {
    localStorage.setItem('id', res.id);
    localStorage.setItem('rol', res.rolUser);
    localStorage.setItem('jwt', res.jwt);
  }

  logOutUser() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('rol');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  jwt: string = localStorage.getItem('jwt');
  rol: string = localStorage.getItem('rol');
  name: string = localStorage.getItem('name');
  
  constructor(private http: HttpClient,private router:Router) {}

  loginUser(username :String,password :String) : any{
    const body = { username, password };

    return new Promise((resolve, reject) => {
      this.http
        .post('/api/auth', body)
        .toPromise()
        .then( (res: {statusCode: number,jwt: string}) => {
          if(res.statusCode === 200){
            this.guardarPlayload(res);
            resolve(res.statusCode);
            localStorage.setItem('jwt',res.jwt);
          }else if (res.statusCode === 204){
            resolve(res.statusCode);
          }
        })
        .catch(error => {
          reject(404);
        });
    });
  }

  guardarPlayload(res){
    let playload = res.jwt.split('.')[1];
    let obj = JSON.parse(atob(playload));
    localStorage.setItem('rol',obj.rol);
    localStorage.setItem('name',obj.name);
    localStorage.setItem('jwt',res.jwt);
  }

  registerUser(username: string,email: string, password: string) : any{
    const body = { username,email,password };
    return this.http.post('/api/users', body).toPromise();
  }

  logOutUser(){
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
  
}

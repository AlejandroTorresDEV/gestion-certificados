import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  jwt: string = localStorage.getItem('jwt');

  constructor(private http: HttpClient,private router:Router) { 
    
  }

  loginUser(username :String,password :String) : any{
    const body = { username, password };

    return new Promise((resolve, reject) => {
      this.http
        .post('/api/auth', body)
        .toPromise()
        .then( (res: {statusCode: number,jwt: string}) => {
          if(res.statusCode === 200){
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

  registerUser(username: string,email: string, password: string) : any{
    const body = { username,email,password };
    return this.http.post('/api/users', body).toPromise();
  }

  logOutUser(){
    localStorage.removeItem('jwt');
    this.router.navigate['/login'];
  }
}

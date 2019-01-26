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
        .then( res => {
            console.log(res);
            resolve('NICE');
        })
        .catch(error => {
          reject('Try again');
          console.log("No existe");
        });
    });
  }

  registerUser(username: string, password: string) : any{
    const body = { username, password };
    return this.http.post('/api/users', body).toPromise();
  }

  logOutUser(){

  }
}

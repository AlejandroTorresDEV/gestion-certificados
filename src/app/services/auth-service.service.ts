import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  jwt: string = localStorage.getItem('jwt');

  constructor(private http: HttpClient,private router:Router) { }

  loginUser(username :String,password :String){
    const body = { username, password };

    return new Promise((resolve, reject) => {
      this.http
        .post('https://localhost:5001/api/auth', body)
        .toPromise()
        .then(() => {
          console.log("Existe")
        })
        .catch(maybeNotAndError => {
          console.log(maybeNotAndError);
        });
    });
  }

  registerUser(){

  }

  logOutUser(){

  }
}

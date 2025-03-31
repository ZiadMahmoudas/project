import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

/*  Register */
  storeToken(token: string) {
    localStorage.setItem("User_Token", token);
  }

  getToken(): string  {
    return localStorage.getItem("User_Token");
  }
  removeToken(){
    localStorage.removeItem("User_Token");
  }

  postReg(data: User) {
    let url = "http://localhost:8000/register";
    return this.http.post(url, data);
  }

/*  Register End*/

}

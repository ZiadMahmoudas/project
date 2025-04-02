import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


isAuthenticated = false;
isAuthorized(): boolean {
  return this.isAuthenticated;
}
enterForHome() {
  this.isAuthenticated = true;
}
/* Save For Notes */
  storeToken(token: string) {
    localStorage.setItem("User_Token", token);
  }

  getToken(): string  {
    return localStorage.getItem("User_Token");
  }
/* unSubscribe For Note  */
  removeToken(){
    localStorage.removeItem("User_Token");
  }
/*  Register */
    url1 = "http://localhost:8000/register";
  postReg(data: User) {
    return this.http.post(this.url1, data);
  }
/*  Register End*/

/* Login */
urlLog = "http://localhost:8000/login"
 postLog(data:User){
  return this.http.post(this.urlLog,data);
 }
 /* Login End */
}

import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost/onf/api/register";
  private _loginUrl = "http://localhost/onf/api/login";

  constructor(private http: Http) { }

  registerUser(user) {
    return this.http.post(this._registerUrl, user);
  }

  loginUser(user){
    return this.http.post(this._loginUrl, user);
  }

}

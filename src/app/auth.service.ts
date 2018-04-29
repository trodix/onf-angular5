import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost/onf/api/register";
  private _loginUrl = "http://localhost/onf/api/login";

  constructor(private http: Http, private _router: Router) { }

  registerUser(user) {
    return this.http.post(this._registerUrl, user);
  }

  loginUser(user){
    return this.http.post(this._loginUrl, user);
  }

  loggedIn() {
    // Retourne true ou false / true si la clé token existe dans le localStorage
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}

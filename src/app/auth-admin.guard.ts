import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthAdminGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(): boolean {
    console.log(this._authService.loggedAdmin());
    if (this._authService.loggedAdmin()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

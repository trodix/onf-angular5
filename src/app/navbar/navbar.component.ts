import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  AppTitle = "Bubûche Statistiques";
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    console.log("loggedin: " + this._authService.loggedIn());
    console.log("loggedadmin: " + this._authService.loggedAdmin());
  }

}

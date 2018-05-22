import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ChartService {

  _estVisible: boolean;

  get estVisible(): boolean {
    //console.log("chartComponent get: " + this.estVisible);
    return this._estVisible;
  }
  set estVisible(visible: boolean) {
    this._estVisible = visible;
    console.log("chartComponent set: " + this.estVisible);
  };

  constructor(private http: Http) { }

  fetchDataGenre() {

    return this.http.get('http://localhost/onf/api/genres').map((res) => res.json());

  }

  fetchDataEspece() {

    return this.http.get('http://localhost/onf/api/especes').map((res) => res.json());

  }

  fetchDataCommune() {

    return this.http.get('http://localhost/onf/api/communes').map((res) => res.json());

  }

  fetchDataIntervention(idArbre) {

    return this.http.get('http://localhost/onf/api/interventions-count/' + idArbre).map((res) => res.json());

  }

}

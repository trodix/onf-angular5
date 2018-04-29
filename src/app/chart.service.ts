import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ChartService {

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

    return this.http.get('http://localhost/onf/api/interventions/' + idArbre).map((res) => res.json());

  }

}

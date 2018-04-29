import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchDataListe() {

    return this.http.get('http://localhost/onf/api/arbres').map((res) => res.json());

  }

  fetchDataDetail(idArbre) {

    return this.http.get('http://localhost/onf/api/arbres/' + idArbre).map((res) => res.json());

  }

  fetchDataInterventions(idArbre) {

    return this.http.get('http://localhost/onf/api/interventions/' + idArbre).map((res) => res.json());

  }

  fetchDataObservations(idArbre, idIntervention){

    return this.http.get('http://localhost/onf/api/observations/' + idArbre + '/' + idIntervention).map((res) => res.json());

  }

}

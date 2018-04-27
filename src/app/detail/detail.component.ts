import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idArbre = null;
  arbre = {};
  lesInterventions = [];
  observationContent = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.idArbre = this.route.snapshot.params['id'];
    this.arbre = this.dataService.fetchDataDetail(this.idArbre).subscribe(res => this.arbre = res);
    this.lesInterventions.push(this.dataService.fetchDataInterventions(this.idArbre).subscribe(res => this.lesInterventions = res));
  }

  getObservations(idIntervention){
    this.observationContent.push(this.dataService.fetchDataObservations(this.idArbre, idIntervention).subscribe(res => this.observationContent = res));
    console.log(this.observationContent);
  }

  // apiGetData() {
  //   return this.dataService.fetchDataDetail().subscribe(res => this.arbre = res);
  // }

}

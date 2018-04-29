import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../data.service";
import { Chart } from 'chart.js';
import { ChartService } from "../chart.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idArbre = null;
  arbre = {};
  lesInterventions = [];
  observationContent = [""];

  constructor(private route: ActivatedRoute, private dataService: DataService, private _chart: ChartService) { }

  ngOnInit() {
    this.idArbre = this.route.snapshot.params['id'];
    this.arbre = this.dataService.fetchDataDetail(this.idArbre)
      .subscribe(res => this.arbre = res);
    this.lesInterventions.push(this.dataService.fetchDataInterventions(this.idArbre)
      .subscribe(res => {
        this.lesInterventions = res;
        console.log(res);
      }));
  }

  getObservations(idIntervention){
    // /**this.observationContent =**/ (this.dataService.fetchDataObservations(this.idArbre, idIntervention)
    //   .subscribe(res => {
    //     this.observationContent[0] !== null 
    //     ? this.observationContent = res
    //     : this.observationContent[0] = "Aucune observations à afficher" ;
    //     console.log(this.observationContent);
    //     this.createChartIntervention();
    //   }));
    for(let element of this.lesInterventions) {
      if (element.idIntervention == idIntervention) {
        if (element.observations == null) {
          this.observationContent[0] = "Aucune observation à afficher"
        } else {
          this.observationContent = element.observations;
        }
      }
    };
  }

  // apiGetData() {
  //   return this.dataService.fetchDataDetail().subscribe(res => this.arbre = res);
  // }

  createChartIntervention() {
    let dataIntervention = [];
    let AllLibelleIntervention = [];
    let AllQte = [];
    let titre = 'Type de traitement par arbre';
    this._chart.fetchDataGenre()
      .subscribe(res => {
        dataIntervention = res.map(res => dataIntervention = res);
        //console.log(dataGenre);
        dataIntervention.forEach(item => {
          AllLibelleIntervention.push(item.libelleType);
          AllQte.push(3);//item.qteArbreTypeIntervention);
        });
        // creation du graph ici
        this.initGraph('canevasIntervention', 'Interventions', AllLibelleIntervention, AllQte, titre);
      });
  }

  randomColorGenerator(nbColor) {
    let colors = [];

    for (let i = 0; i < nbColor; i++) {
      colors[i] = '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    }
    return colors;
  };

  initGraph(element, label, labels, data, titre) {

    let myChart = element;
    let colors = this.randomColorGenerator(data.length);

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let chartGenres = new Chart(myChart, {
      type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        //labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          //backgroundColor:'green',
          backgroundColor: colors,
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000'
        }]
      },
      options: {
        title: {
          display: true,
          text: titre,
          fontSize: 25
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            fontColor: '#000'
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }
        },
        tooltips: {
          enabled: true
        }
      }
    });

    //console.log('chartGenres: ' + chartGenres.options.titre.text);
  }

}

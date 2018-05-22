import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from "../chart.service";
//import { ChartCustom } from "../chart-custom";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];
  estVisible = this._chartService.estVisible;

  //constructor(private _chart: ChartCustom, private _chartService: ChartService) { }
  constructor(private _chartService: ChartService) { }

  ngOnInit() {
    this.createChartGenre();
    this.createChartEspece();
    this.createChartCommune();
    
    this.estVisible = this._chartService.estVisible;
  }

  randomColorGenerator(nbColor) {
    let colors = [];

    for (let i = 0; i < nbColor; i++) {
      colors[i] = '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
    }
    return colors;
  };

  createChartGenre() {
    let dataGenre = [];
    let AllLibelleGenre = [];
    let AllQte = [];
    let titre = 'Genres les plus courants';
    this._chartService.fetchDataGenre()
      .subscribe(res => {
        dataGenre = res.map(res => dataGenre = res);
        //console.log(dataGenre);
        dataGenre.forEach(item => {
          AllLibelleGenre.push(item.libelleGenre);
          AllQte.push(item.qteArbreGenre);
        });
        // creation du graph ici
        this.initGraph('canvasGenre', 'Genres', AllLibelleGenre, AllQte, titre);
      });
  }

  createChartEspece() {
    let dataEspece = [];
    let AllLibelleEspece = [];
    let AllQte = [];
    let titre = 'Especes les plus courantes';
    this._chartService.fetchDataEspece()
      .subscribe(res => {
        dataEspece = res.map(res => dataEspece = res);
        //console.log(dataEspece);
        dataEspece.forEach(item => {
          AllLibelleEspece.push(item.libelleEspece);
          AllQte.push(item.qteArbreEspece);
        });
        // creation du graph ici
        this.initGraph('canvasEspece', 'Especes', AllLibelleEspece, AllQte, titre);
      });
  }

  createChartCommune() {
    let dataCommune = [];
    let AllLibelleCommune = [];
    let AllQte = [];
    let titre = 'Arbres par commune';
    this._chartService.fetchDataCommune()
      .subscribe(res => {
        dataCommune = res.map(res => dataCommune = res);
        //console.log(dataCommune);
        dataCommune.forEach(item => {
          AllLibelleCommune.push(item.commune);
          AllQte.push(item.qteArbreCommune);
        });
        // creation du graph ici
        this.initGraph('canvasCommune', 'Communes', AllLibelleCommune, AllQte, titre);
      });
  }

  initGraph(element, label, labels, data, titre) {

    let myChart = element;
    let colors = this.randomColorGenerator(data.length);

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    this.chart = new Chart(myChart, {
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



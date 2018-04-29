import { Chart } from 'chart.js';
//import { ChartService } from "./chart.service";

export class ChartCustom {

   

    construct() { }

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

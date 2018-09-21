import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the GraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {

  @ViewChild('chart1canvas') chart1canvas;

  chart1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getDataArrays() {
    return 
  }

  loadChart() {
    var timeFormat = 's';

    this.chart1canvas = new Chart(this.chart1canvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: "US Dates",
            data: [1, 5, 3, 4, 10, 2],
            fill: false,
            borderColor: 'red'
          },
          {
            label: "UK Dates",
            data: [4, 2, 7, 1, 3, 5],
            fill: false,
            borderColor: 'blue'
          }
        ],
        labels: [1, 2, 3, 4, 5, 6]
      },

      options: {
        // elements: {
        //   line: {
        //     tension: 0
        //   }
        // },
        responsive: true,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time'
            },
            ticks: {
							callback: function(dataLabel, index) {
								// Hide the label of every 2nd dataset
								return index % 2 === 0 ? dataLabel : '';
							}
						}
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'PV'
            }
          }]
        }
      }
    });
    // this.chart1canvas = new Chart(this.chart1canvas.nativeElement, {
    //   type: 'line',
    //   data: {
    //     datasets: [
    //       {
    //         label: "US Dates",
    //         data: [{
    //           x: 1, y: 175
    //         }, {
    //           x: 2, y: 175
    //         }, {
    //           x: 3, y: 178
    //         }, {
    //           x: 4, y: 178
    //         }],
    //         fill: false,
    //         borderColor: 'red'
    //       },
    //       {
    //         label: "UK Dates",
    //         data: [{
    //           x: 1, y: 175
    //         }, {
    //           x: 2, y: 175
    //         }, {
    //           x: 3, y: 178
    //         }, {
    //           x: 4, y: 178
    //         }],
    //         fill: false,
    //         borderColor: 'blue'
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //       text: "Chart.js Time Scale"
    //     },
    //     scales: {
    //       xAxes: [{
    //         type: "time",
    //         distribution: 'series',
    //         time: {
    //           format: 's',
    //           unit: 'second'
    //         },
    //         scaleLabel: {
    //           display: true,
    //           labelString: 'Date'
    //         }
    //       }],
    //       yAxes: [{
    //         scaleLabel: {
    //           display: true,
    //           labelString: 'value'
    //         }
    //       }]
    //     }
    //   }
    // });

    console.log('Loaded Chart');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphPage');

    this.loadChart();
  }


}

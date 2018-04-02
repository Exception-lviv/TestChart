import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    const data = this._data.loadedData();
    const generator = generateColor();
    const dataForChart = data.map((part) => {
      const colGen = generator.next();
      const color = (colGen.done) ? '#FFFFFF' : colGen.value;
      return {
        label: part.category,
        data: part.arr.map((item) => ({x: item.date, y: item.count})),
        backgroundColor: color,
        borderColor: color,
        fill: false
      };
    });

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        datasets: dataForChart
      } ,
      options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'week'
                },
                displayFormats: {
                        quarter: 'll'
                }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Tasks Count'
                }
            }]
        },
        title: {
          display: true,
          text: 'YYER Chart'
        },
        tooltips: {
          mode: 'point',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });

    function* generateColor() {
      while (true) {
        yield '#008000';
        yield '#ff0000';
        yield '#00ffff';
        yield '#0000ff';
        yield '#ff00ff';
        yield '#ffff00';
      }
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  loadedData() {
    return [
      {
        category: 'NewTasks',
        arr: [{
          count: 70,
          date: Date.parse('2018-01-01')
        },
        {
          count: 38,
          date: Date.parse('2018-02-01')
        },
        {
          count: 33,
          date: Date.parse('2018-03-01')
        },
        {
          count: 5,
          date: Date.parse('2018-04-01')
        }
      ]},
      {
        category: 'OpenTasks',
        arr: [{
          count: 48,
          date: Date.parse('2018-01-05')
        },
        {
          count: 52,
          date: Date.parse('2018-01-22')
        },
        {
          count: 33,
          date: Date.parse('2018-02-17')
        },
        {
          count: 30,
          date: Date.parse('2018-03-07')
        },
        {
          count: 19,
          date: Date.parse('2018-03-29')
        }
      ]},
      {
        category: 'ClosedTasks',
        arr: [{
          count: 12,
          date: Date.parse('2018-01-04')
        },
        {
          count: 27,
          date: Date.parse('2018-02-03')
        },
        {
          count: 33,
          date: Date.parse('2018-03-01')
        },
        {
          count: 40,
          date: Date.parse('2018-04-02')
        }
      ]},
    ];
  }

}

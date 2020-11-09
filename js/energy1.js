"use strict";

// 1: data
let _heatData = [{
    month: 'January',
    heat: 123,
	heat1: 141,
	heat2: 152,
	heat3: 144
  },
  {
    month: 'February',
    heat: 214,
	heat1: 187,
	heat2: 175,
	heat3: 197
  },
  {
    month: 'March',
    heat: 198,
	heat1: 204,
	heat2: 207,
	heat3: 186
  },
  {
    month: 'April',
    heat: 206,
	heat1: 225,
	heat2: 216,
	heat3: 219
  },
  {
    month: 'May',
    heat: 227,
	heat1: 231,
	heat2: 235,
	heat3: 211
  },
  {
    month: 'June',
    heat: 316,
	heat1: 362,
	heat2: 478,
	heat3: 524
  }
];

// 2: prepare data for chart
function prepareData(data) {
  let months = [];
  let heats = [];
  let heats1 = [];
  let heats2 = [];
  let heats3 = [];
  for (const object of data) {
    months.push(object.month);
    heats.push(object.heat);
	heats1.push(object.heat1);
    heats2.push(object.heat2);
	heats3.push(object.heat3);
  }
  return {
    months,
    heats,
	heats1,
	heats2,
	heats3
  };
}

// 3: create and append the chart
function appendChart(milkData) {
  let data = prepareData(milkData);
  console.log(data);
  let chartContainer = document.getElementById('chartContainer3');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [{
        data: data.heats,
        label: '1. Quarter',
        backgroundColor: '#2d452c'
      },
	  {
        data: data.heats1,
        label: '2. Quarter',
        backgroundColor: '#456e43'
      },
	  {
        data: data.heats2,
        label: '3. Quarter',
        backgroundColor: '#489144'
      },
	  {
        data: data.heats3,
        label: '4. Quarter',
        backgroundColor: '#30b828'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Electricity Usage (kWh) 2020'
      }
    }

  });
}

appendChart(_heatData);
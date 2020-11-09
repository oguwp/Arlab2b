"use strict";

// 1: data
let _energyData = [{
    month: 'January',
    energy: 138000,
	energy1: 141450,
	energy2: 144691,
	energy3: 147215
  },
  {
    month: 'February',
    energy: 125430,
	energy1: 126053,
	energy2: 121051,
	energy3: 132121
  },
  {
    month: 'March',
    energy: 92552,
	energy1: 90615,
	energy2: 91862,
	energy3: 94815
  },
  {
    month: 'April',
    energy: 106214,
	energy1: 102955,
	energy2: 100952,
	energy3: 99861
  },
  {
    month: 'May',
    energy: 115421,
	energy1: 114215,
	energy2: 116124,
	energy3: 115821
  },
  {
    month: 'June',
    energy: 151491,
	energy1: 149182,
	energy2: 147143,
	energy3: 152851
  }
];

// 2: prepare data for chart
function prepareData(data) {
  let months = [];
  let energys = [];
  let energys1 = [];
  let energys2 = [];
  let energys3 = [];
  for (const object of data) {
    months.push(object.month);
    energys.push(object.energy);
	energys1.push(object.energy1);
    energys2.push(object.energy2);
	energys3.push(object.energy3);
  }
  return {
    months,
    energys,
	energys1,
	energys2,
	energys3
  };
}

// 3: create and append the chart
function appendChart(milkData) {
  let data = prepareData(milkData);
  console.log(data);
  let chartContainer = document.getElementById('chartContainer2');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [{
        data: data.energys,
        label: '1. Quarter',
        backgroundColor: '#2d452c'
      },
	  {
        data: data.energys1,
        label: '2. Quarter',
        backgroundColor: '#456e43'
      },
	  {
        data: data.energys2,
        label: '3. Quarter',
        backgroundColor: '#489144'
      },
	  {
        data: data.energys3,
        label: '4. Quarter',
        backgroundColor: '#30b828'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Diesel Usage (Liter) 2020'
      }
    }

  });
}

appendChart(_energyData);
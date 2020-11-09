"use strict";

// 1: data
let _digestionData = [{
    month: 'January',
    digestion: 38000,
	digestion1: 41450,
	digestion2: 44691,
	digestion3: 47215
  },
  {
    month: 'February',
    digestion: 25430,
	digestion1: 26053,
	digestion2: 21051,
	digestion3: 32121
  },
  {
    month: 'March',
    digestion: 42552,
	digestion1: 40615,
	digestion2: 41862,
	digestion3: 44815
  },
  {
    month: 'April',
    digestion: 66214,
	digestion1: 60255,
	digestion2: 60952,
	digestion3: 69861
  },
  {
    month: 'May',
    digestion: 75421,
	digestion1: 74215,
	digestion2: 76124,
	digestion3: 75821
  },
  {
    month: 'June',
    digestion: 111491,
	digestion1: 119182,
	digestion2: 117143,
	digestion3: 112851
  }
];

// 2: prepare data for chart
function prepareData(data) {
  let months = [];
  let digestions = [];
  let digestions1 = [];
  let digestions2 = [];
  let digestions3 = [];
  for (const object of data) {
    months.push(object.month);
    digestions.push(object.digestion);
	digestions1.push(object.digestion1);
    digestions2.push(object.digestion2);
	digestions3.push(object.digestion3);
  }
  return {
    months,
    digestions,
	digestions1,
	digestions2,
	digestions3
  };
}

// 3: create and append the chart
function appendChart(milkData) {
  let data = prepareData(milkData);
  console.log(data);
  let chartContainer = document.getElementById('chartContainer4');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [{
        data: data.digestions,
        label: '1. Quarter',
        backgroundColor: '#2d452c'
      },
	  {
        data: data.digestions1,
        label: '2. Quarter',
        backgroundColor: '#456e43'
      },
	  {
        data: data.digestions2,
        label: '3. Quarter',
        backgroundColor: '#489144'
      },
	  {
        data: data.digestions3,
        label: '4. Quarter',
        backgroundColor: '#30b828'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Methane (CO2 pr. kg milk) 2020'
      }
    }

  });
}

appendChart(_digestionData);
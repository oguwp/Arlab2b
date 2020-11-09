"use strict";

// 1: data
let _milkData = [{
    month: 'January',
    milk: 2400,
	milk1: 3500,
	milk2: 7167,
	milk3: 3645
  },
  {
    month: 'February',
    milk: 3200,
	milk1: 4753,
	milk2: 6646,
	milk3: 3672
  },
  {
    month: 'March',
    milk: 2800,
	milk1: 2641,
	milk2: 4869,
	milk3: 2546
  },
  {
    month: 'April',
    milk: 4179,
	milk1: 3854,
	milk2: 5981,
	milk3: 4251
  },
  {
    month: 'May',
    milk: 5667,
	milk1: 5611,
	milk2: 7415,
	milk3: 5235
  },
  {
    month: 'June',
    milk: 4612,
	milk1: 4921,
	milk2: 6731,
	milk3: 4451
  }
];

// 2: prepare data for chart
function prepareData(data) {
  let months = [];
  let milks = [];
  let milks1 = [];
  let milks2 = [];
  let milks3 = [];
  for (const object of data) {
    months.push(object.month);
    milks.push(object.milk);
	milks1.push(object.milk1);
    milks2.push(object.milk2);
	milks3.push(object.milk3);
  }
  return {
    months,
    milks,
	milks1,
	milks2,
	milks3
  };
}

// 3: create and append the chart
function appendChart(milkData) {
  let data = prepareData(milkData);
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [{
        data: data.milks,
        label: '1. Quarter',
        backgroundColor: '#2d452c'
      },
	  {
        data: data.milks1,
        label: '2. Quarter',
        backgroundColor: '#456e43'
      },
	  {
        data: data.milks2,
        label: '3. Quarter',
        backgroundColor: '#489144'
      },
	  {
        data: data.milks3,
        label: '4. Quarter',
        backgroundColor: '#30b828'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Milk Production (Liter) 2020'
      }
    }

  });
}

appendChart(_milkData);
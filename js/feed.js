"use strict";

// 1: data
let _feedData = [{
    month: 'January',
    feed: 5136,
	feed1: 6132,
	feed2: 7723,
	feed3: 8235
  },
  {
    month: 'February',
    feed: 6266,
	feed1: 6253,
	feed2: 6668,
	feed3: 7143
  },
  {
    month: 'March',
    feed: 5612,
	feed1: 6156,
	feed2: 6367,
	feed3: 5875
  },
  {
    month: 'April',
    feed: 6944,
	feed1: 8152,
	feed2: 7356,
	feed3: 7895
  },
  {
    month: 'May',
    feed: 6723,
	feed1: 7355,
	feed2: 7141,
	feed3: 6567
  },
  {
    month: 'June',
    feed: 9345,
	feed1: 10434,
	feed2: 10714,
	feed3: 13285
  }
];

// 2: prepare data for chart
function prepareData(data) {
  let months = [];
  let feeds = [];
  let feeds1 = [];
  let feeds2 = [];
  let feeds3 = [];
  for (const object of data) {
    months.push(object.month);
    feeds.push(object.feed);
	feeds1.push(object.feed1);
    feeds2.push(object.feed2);
	feeds3.push(object.feed3);
  }
  return {
    months,
    feeds,
	feeds1,
	feeds2,
	feeds3
  };
}

// 3: create and append the chart
function appendChart(feedData) {
  let data = prepareData(feedData);
  console.log(data);
  let chartContainer = document.getElementById('chartContainer5');
  let chart = new Chart(chartContainer, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [{
        data: data.feeds,
        label: '1. Quarter',
        backgroundColor: '#2d452c'
      },
	  {
        data: data.feeds1,
        label: '2. Quarter',
        backgroundColor: '#456e43'
      },
	  {
        data: data.feeds2,
        label: '3. Quarter',
        backgroundColor: '#489144'
      },
	  {
        data: data.feeds3,
        label: '4. Quarter',
        backgroundColor: '#30b828'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Carbon Dioxide (CO2 per kg milk) 2020'
      }
    }

  });
}

appendChart(_feedData);
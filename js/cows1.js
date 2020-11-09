"use strict";

// 1: data
// Array of objects colors
let _colorData = [{
	color: "January",
	numberOfVotes: 12,
	numberOfVotes1: 2,
	numberOfVotes2: 6,
	numberOfVotes3: 17,
	backgroundColor: "#004F1B",
	borderColor: "#004F1B"
}, {
	color: "February",
	numberOfVotes: 21,
	numberOfVotes1: 17,
	numberOfVotes2: 14,
	numberOfVotes3: 12,
	backgroundColor: "#4EAA2F",
	borderColor: "#4EAA2F"
}, {
	color: "March",
	numberOfVotes: 27,
	numberOfVotes1: 25,
	numberOfVotes2: 21,
	numberOfVotes3: 13,
	backgroundColor: "#2FA234",
	borderColor: "#2FA234"
}, {
	color: "April",
	numberOfVotes: 52,
	numberOfVotes1: 51,
	numberOfVotes2: 43,
	numberOfVotes3: 21,
	backgroundColor: "#FFE48D",
	borderColor: "#FFE48D"
}, {
	color: "May",
	numberOfVotes: 25,
	numberOfVotes1: 21,
	numberOfVotes2: 19,
	numberOfVotes3: 14,
	backgroundColor: "#FECF00",
	borderColor: "#FECF00"
}, {
	color: "June",
	numberOfVotes: 39,
	numberOfVotes1: 31,
	numberOfVotes2: 24,
	numberOfVotes3: 13,
	backgroundColor: "#F9AE00",
	borderColor: "#F9AE00"
}];

// 2: prepare data for chart
function prepareData(data) {
	let colors = [];
	let votes = [];
	let votes1 = [];
	let votes2 = [];
	let votes3 = [];
	let backgroundColors = [];
	let borderColors = [];

	for (const dataObject of data) {
		colors.push(dataObject.color);
		votes.push(dataObject.numberOfVotes);
		votes1.push(dataObject.numberOfVotes1);
		votes2.push(dataObject.numberOfVotes2);
		votes3.push(dataObject.numberOfVotes3);
		backgroundColors.push(dataObject.backgroundColor);
		borderColors.push(dataObject.borderColor);
	}

	return {
		colors,
		votes,
		votes1,
		votes2,
		votes3,
		backgroundColors,
		borderColors
	};
}

// 3: create and append the chart
function appendChart(data) {
	// create a new chart
	let chart = new Chart(document.querySelector('#chartContainer1'), {
		type: 'bar',
		data: {
			labels: data.colors,
			datasets: [{
					label: '1. Quarter',
					data: data.votes,
					backgroundColor: '#2d452c'
       },
				{
					label: '2. Quarter',
					data: data.votes1,
					backgroundColor: '#456e43'
      },
				{
					label: '3. Quarter',
					data: data.votes2,
					backgroundColor: '#489144'
      },
				{
					label: '4. Quarter',
					data: data.votes3,
					backgroundColor: '#30b828'
      }]
		},
		// Options and configuration options goes here
		// Go to the docs to find more: https://www.chartjs.org/docs/latest/
		// Bar chart: https://www.chartjs.org/docs/latest/charts/bar.html 
		options: {
			title: {
				display: true,
				text: 'Cows Sickness 2020'
			}
		}
	});
}
let data = prepareData(_colorData);
appendChart(data);

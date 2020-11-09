// GET API 1
const getApi1BtnElement = document.getElementById("getApi1");

getApi1BtnElement.addEventListener("click", getApi1);

function getApi1() {
	fetch('./api/api1.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
			data.forEach(function (data) {
				output += `
              <p>${data.infected}</p>
            `;
			})
            document.getElementById('output').innerHTML = output;
		})
}


// GET API 2
const getApi2BtnElement = document.getElementById("getApi2");

getApi2BtnElement.addEventListener("click", getApi2);

function getApi2() {
	fetch('./api/api2.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
			data.forEach(function (data) {
				output += `
              <p>${data.recovered}</p>
            `;
			})
            document.getElementById('output1').innerHTML = output;
		})
}

// GET API 3
const getApi3BtnElement = document.getElementById("getApi3");

getApi3BtnElement.addEventListener("click", getApi3);

function getApi3() {
	fetch('./api/api3.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
			data.forEach(function (data) {
				output += `
              <p>${data.dead}</p>
            `;
			})
            document.getElementById('output2').innerHTML = output;
		})
}
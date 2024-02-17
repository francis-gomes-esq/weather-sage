var apiKey = 'aee06ebf856f16e0213440b39a3aefc2';
// var city = 'london';
var forecastEl = document.querySelector('#forecast');
var searchBtn = document.getElementById('search-button');
var searchHistory = JSON.parse(localStorage.getItem('history')) || [];

// Function to fetch current weather data for a given city
function currentWeather(city) {
	var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

	fetch(queryUrl)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			var lon = data.coord.lon;
			var lat = data.coord.lat;

			var temperatureEl = document.getElementById('temperature');
			temperatureEl.textContent = 'Temp ' + data.main.temp + '°C';
			var windEl = document.getElementById('wind');
			windEl.textContent = 'Wind ' + data.main.temp + 'KPH';
			var humidityEl = document.getElementById('humidity');
			humidityEl.textContent = ' Humidity ' + data.main.temp + '%';
			var dayEl = document.getElementById('date');
			dayEl.textContent = dayjs().format('YYYY-MM-DD');

			fiveDayWeather(lon, lat);
			searchHistory.push(city);
			localStorage.setItem('history', JSON.stringify(searchHistory));
			getLocalStorageHistory();
		});
}

// Function to fetch search history from local storage
function getLocalStorageHistory() {
	var history = localStorage.getItem('history');
	console.log(history);
}

function fiveDayWeather() {
	var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

	fetch(queryUrl)
		.then(response => response.json())
		.then(data => {
			forecastEl.textContent = '';
			for (let i = 0; i < data.list.length; i++) {
				const element = data.list[i];

				let startTime = element.dt_txt.split(' ')[1].split(':')[0];
				if (startTime === '12') {
					let html = `div class="card" style="width: 12rem";`;
				}
			}
		});
}

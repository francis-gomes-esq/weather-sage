var apiKey = 'aee06ebf856f16e0213440b39a3aefc2';
var city = 'london';
var forecastEl = document.querySelector('#forecast');

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

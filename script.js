var apiKey = 'aee06ebf856f16e0213440b39a3aefc2'
var city = 'london'
var forecastEl = document.querySelector('#forecast')

function currentWeather(city) {
	var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

	fetch(queryUrl)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			var lon = data.coord.lon
			var lat = data.coord.lat
			fiveDayWeather(lon, lat)
		})
}

const	API_KEY = "405db3691d6869b77300ea8e346af8f7";

function onGeoOk(position) {
	const	lat = position.coords.latitude;
	const	lon = position.coords.longitude;

	console.log(lat, lon);
	const	url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json()).then(data => {
		const	weatherContainer = document.querySelector("#weather span:first-child");
		const	cityContainer = document.querySelector("#weather span:last-child");
		weatherContainer.innerText = `data.weather[0].main; / ${data.main.temp}`;
		cityContainer.innerText = data.name;
	});
}

function onGeoError() {
	alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
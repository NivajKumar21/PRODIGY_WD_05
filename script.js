//'a14c9de7ad52cf772695b6f89ec1b499';

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'a14c9de7ad52cf772695b6f89ec1b499'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('weatherInfo').innerHTML = '';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loadingSpinner').style.display = 'none';
            if (data.cod === 200) {
                const weatherInfo = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                    <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('loadingSpinner').style.display = 'none';
            console.error('Error fetching the weather data:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching the weather data.</p>`;
        });
});

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const loader = document.getElementById('loader');
    const resultDiv = document.getElementById('result');

    // Show loader and clear old results
    loader.style.display = 'block';
    resultDiv.innerHTML = '';

    fetch(`http://localhost:5000/weather/${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            document.getElementById('result').innerHTML = `<p style="color:red">${error.message}</p>`;
        })
        .finally(() => {
            // Always hide loader
            loader.style.display = 'none';
        });
});

function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img class="weather-icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

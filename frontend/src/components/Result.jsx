import "./Result.css"

function Result({weather, error, loading}) {

  if (loading) return <div id="loader" style={{ display: 'block' }}></div>
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (!weather) return null

  const imageUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  const cityName = weather.name
  const countryCode = weather.sys.country
  const temperature = weather.main.temp
  const feelsLikeTemperature = weather.main.feels_like
  const humidity = weather.main.humidity
  const weatherDescription = weather.weather[0].description

  return(
    <>
      <h2>{cityName}, {countryCode}</h2>
      <img className="weather-icon" src={imageUrl} alt={weatherDescription}/>
      <p>Temperature: {temperature} °C</p>
      <p className="feels-like-temp">Feels like: {feelsLikeTemperature} °C</p>
      <p>Weather: {weatherDescription}</p>
      <p>Humidity: {humidity} %</p>
    </>
  )
}

export default Result
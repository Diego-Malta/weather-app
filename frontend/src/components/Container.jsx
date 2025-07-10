import UserInput from "./UserInput"
import Result from "./Result"

function Container({city, setCity, weather, error, loading, fetchWeather}) {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <UserInput 
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
      <Result 
        weather={weather}
        error={error}
        loading={loading}
      />
    </div>
  )
}

export default Container
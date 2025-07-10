import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:5000/weather/${city}`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={fetchWeather}>Get Weather</button>
      
      {error && <p style={{color: 'red'}}>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
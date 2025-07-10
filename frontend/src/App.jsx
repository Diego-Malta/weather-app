import { useState } from 'react';
import Container from './components/Container';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {

    if(!city) return
    setLoading(true);
    setError('');
    setWeather(null);


    try {
      const response = await fetch(`http://localhost:5000/weather/${city}`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container
        city={city}
        setCity={setCity}
        weather={weather}
        error={error}
        loading={loading}
        fetchWeather={fetchWeather}
      />
    </div>
  );
}

export default App;
import Header from './components/Header';
import { useState } from 'react';
import { useWeather } from './hooks/useWeather';

const App = () => {
  const { weather, error, loading, searchWeather } = useWeather(); 
  const [city, setCity] = useState('');
  
  return (
      <>
        <Header />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={() => searchWeather(city)} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
          
          {city.trim() === '' && <p>Please enter a city name to see the weather information.</p>}
          {weather &&   <div>
           <p>Current city: {weather.city}</p>
           <p>Temperature: {weather.temperature}°C</p>
          </div> }
          { error && <p>{error}</p> }
      </>
      
  );
}

export default App

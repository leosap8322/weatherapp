import Header from './components/Header';
import { useState } from 'react';
import { type IWeather } from './shared/interfaces/weather.interface';

const App = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<IWeather | null>(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    const data = await response.json();
    console.log(data);
  };
  
  
  return (
      <>
        <Header />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <p>Current city: {weather?.city}</p>
          <p>Temperature: {weather?.temperature}°C</p>
      </>
      
  );
}

export default App

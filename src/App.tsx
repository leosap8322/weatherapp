import Header from './components/Header';
import { useState } from 'react';
import { type IWeather } from './shared/interfaces/weather.interface';
import type { IOpenWeatherApiResponse } from './shared/interfaces/open-weather-api-response';
import { Weather } from './shared/clases/weather';
import type { IOpenWeatherApiResponseError } from './shared/interfaces/open-weather-api-response-error';

const App = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<IWeather | null>(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    const data: IOpenWeatherApiResponse | IOpenWeatherApiResponseError = await response.json();
    if (data.cod === 200) {
      setWeather(new Weather(data));
    } else {
      setWeather(null);
    }
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

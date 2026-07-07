import Header from './components/Header';
import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/search-bar/SearchBar';
import WeatherCard from './components/weather-card/WeatherCard';
import ErrorMessage from './components/error-message/ErrorMessage';

const App = () => {
  const { weather, error, loading, searchWeather } = useWeather(); 
  const [city, setCity] = useState('');
  
  return (
      <>
        <Header />
          <SearchBar
            city={city}
            loading={loading}
            onCityChange={setCity}
            onSearch={() => searchWeather(city)}
          />
          
          {weather && <WeatherCard weather={weather} />}
          { error && <ErrorMessage message={error} /> }
      </>
      
  );
}

export default App

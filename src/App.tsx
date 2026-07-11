import Header from './components/Header';
import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/search-bar/SearchBar';
import WeatherCard from './components/weather-card/WeatherCard';
import ErrorMessage from './components/error-message/ErrorMessage';
import LoadingCard from './components/loading-card/LoadingCard';

import EmptyState from './components/empty-card/EmptyState';

const App = () => {
  const { weather, error, loading, searchWeather } = useWeather(); 
  const [city, setCity] = useState('');
  
  return (
      <>
        <div className="flex flex-col justify-center items-center min-h-screen space-y-6 bg-slate-100">
          <Header /> 
          <SearchBar
            city={city}
            loading={loading}
            onCityChange={setCity}
            onSearch={() => searchWeather(city)}
          />
          {loading && <LoadingCard />}
          {!loading && !weather && !error && <EmptyState />}
          {weather && <WeatherCard weather={weather} />}
          { error && <ErrorMessage /> }
        </div>
      </>
      
  );
}

export default App

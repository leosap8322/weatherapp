import { useState } from "react";
import type { IWeather } from "../shared/interfaces/weather.interface";
import { fetchWeatherData } from "../shared/services/weather.service";
import type { IUseWeatherReturn } from "./use-weather-return.interface";




export const useWeather = (): IUseWeatherReturn => {
    const [weather, setWeather] = useState<IWeather | null >(null);
    const [error,setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const searchWeather = async (city: string) => {
      setLoading(true);
      setError(null);
      try {
        const weatherData = await fetchWeatherData(city);
        setError(null);
        setWeather(weatherData);
      } catch (err) {
        setWeather(null);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
      }
      finally {
        setLoading(false);
      }
    
    }
    return {weather,error,loading,searchWeather};
}
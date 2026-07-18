import type { IWeather } from "../interfaces/weather.interface";
import { Weather } from "../classes/weather";
import type { IOpenWeatherApiResponse } from "../interfaces/open-weather-api-response.interface";
import type { IOpenWeatherApiResponseError } from "../interfaces/open-weather-api-response-error.interface";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const fetchWeatherData =  async (city: string) : Promise<IWeather> => {
    if (city.trim() === ''){
        throw new Error('Please enter a city name to see the weather information.');}
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data: IOpenWeatherApiResponse | IOpenWeatherApiResponseError = await response.json();
        if (data.cod !== 200) {
                throw new Error(data.message || 'An error occurred while fetching the weather data.');
              }
                return new Weather(data);

}

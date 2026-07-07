import type { IWeatherCardProps } from "./weather-card-props.interface";

function WeatherCard({
    weather,
    }: IWeatherCardProps) {
    return ( 
        <div>
           <p>Current city: {weather.city}</p>
           <p>Temperature: {weather.temperature}°C</p>
        </div> )
    }
export default WeatherCard;
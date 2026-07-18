import Card from "../Card/Card";
import type { IWeatherCardProps } from "./weather-card-props.interface";

function WeatherCard({
    weather,
    }: IWeatherCardProps) {
    return ( 
        <Card>
            <div className="mb-6 text-center"> 
                <h2 className="font-semibold">{weather.city}</h2> 
                <p className="font-bold text-4xl">{Math.round(weather.temperature)}°C</p> 
            </div>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600">Feels like: </span>
                    <span>{Math.round(weather.feelsLike)}°C</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Humidity: </span>
                    <span>{weather.humidity}%</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Wind speed: </span>
                    <span>{weather.windSpeed} m/s</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Description: </span>
                    <span>{weather.description}</span>
                </div>
                <img className="mx-auto" src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
            </div>
        </Card> 
        )
    }
export default WeatherCard;
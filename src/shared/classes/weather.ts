import type { IOpenWeatherApiResponse } from "../interfaces/open-weather-api-response.interface";
import type { IWeather } from "../interfaces/weather.interface";

export class Weather implements IWeather {
    city: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    description: string;
    icon: string;

    constructor(res: IOpenWeatherApiResponse) {
        this.city = res.name;
        this.temperature = res.main.temp;
        this.feelsLike = res.main.feels_like;
        this.humidity = res.main.humidity;
        this.windSpeed = res.wind.speed;
        this.description = res.weather[0].description;
        this.icon = res.weather[0].icon;
    }
}

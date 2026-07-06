import type { IOpenWeatherApiResponse } from "../interfaces/open-weather-api-response.interface";
import type { IWeather } from "../interfaces/weather.interface";

export class Weather implements IWeather {
    city: string;
    temperature: number;

    constructor(res: IOpenWeatherApiResponse) {
        this.city = res.name;
        this.temperature = res.main.temp;
    }
}

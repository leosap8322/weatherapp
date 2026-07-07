import type { IWeather } from "../shared/interfaces/weather.interface";

export interface IUseWeatherReturn {
    weather: IWeather | null;
    error: string | null;
    loading: boolean;
    searchWeather: (city: string) => Promise<void>;
}

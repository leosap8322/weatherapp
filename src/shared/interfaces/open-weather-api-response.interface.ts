export interface IOpenWeatherApiResponse {
    coord: ICoord;

    weather: {
            id: number;
            main:string; 
            description:string; 
            icon:string; 
        }[];
    base: "stations";
    main: IMain;
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        country: "UA",
        sunrise: number;
        sunset: number;
    },
    timezone: number;
    id: number;
    name: string;
    cod: 200;
}

export interface ICoord {
    lon: number;
    lat: number;
}

export interface IMain{
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    }
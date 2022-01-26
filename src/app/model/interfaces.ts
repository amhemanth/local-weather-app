export interface ICurrentWeatherData {
    base:any,
    clouds: any,
    cod: any,
    coord: any,
    dt: any,
    id: any,
    name:string,
    main: {
        temp:number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
    },
    weather: [
        {
            id:number,
            main: string,
            icon: string,
            description: string,
        }
    ],
    sys: any,
    timezone: any,
    visibility: any,
    wind: any,
}
export interface ICurrentWeather {
    city: string
    country: string
    date: Date
    image: string
    temperature: number
    description: string
  }
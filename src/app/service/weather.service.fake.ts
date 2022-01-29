import {Observable, of} from 'rxjs'
import { IWeatherService } from './weather-service.service'
import { ICurrentWeather } from '../model/interfaces'

export class WeatherServiceFake implements IWeatherService{
    private fakeWeather: ICurrentWeather = {
        city: 'Tirupati',
        country: 'IN',
        date: new Date(),
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle',
    }
    public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        return of(this.fakeWeather);
    }
}
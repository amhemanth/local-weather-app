import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICurrentWeather, ICurrentWeatherData } from '../model/interfaces';
import {map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city:string, country:string):Observable<ICurrentWeather>{
    return this.httpClient.get<ICurrentWeatherData>(
      `http://api.openweathermap.org/data/2.5/weather?`+
      `q=${city},${country}&appid=c709d8a70a30dbef4ddf9fe8eda0c6fd&units=metric`
    ).pipe(map((data:any)=> this.transformToICurrentWeather(data)))
  }
  
  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather{
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description,
    }
  }
}
export interface IWeatherService{
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
}

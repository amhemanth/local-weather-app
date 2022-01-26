import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../model/interfaces';
import { WeatherServiceService } from '../service/weather-service.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather
  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather("Tirupati", "ind").subscribe(data =>{
      this.current = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../model/interfaces';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather
  constructor() { 
    this.current = {
      city: 'Tirupati',
      country: 'India',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}

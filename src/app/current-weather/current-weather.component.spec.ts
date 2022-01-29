import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherServiceService } from '../service/weather-service.service';

import { CurrentWeatherComponent } from './current-weather.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { WeatherServiceFake } from '../service/weather.service.fake';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      providers: [{provide: WeatherServiceService, useClass: WeatherServiceFake}],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

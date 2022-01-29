import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WeatherServiceService } from './weather-service.service';
import { WeatherServiceFake } from './weather.service.fake';

describe('WeatherServiceService', () => {
  let service: WeatherServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: WeatherServiceService, useClass: WeatherServiceFake}],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

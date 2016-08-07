'use strict';

import WeatherService from './weather.service';

describe( 'WeatherService', () => {

  let weatherService;

  beforeEach( () => {
    weatherService = new WeatherService();
  } );

  it( 'it should return forecast info', () => {
    const desiredCityWeather = weatherService.getWeather('Moscow').then((data)=>{
      expect( desiredCityWeather.item.lat ).toEqual( '55.741638');
    });

  } );

} );

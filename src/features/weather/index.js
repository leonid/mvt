import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './weather.routes';
import WeatherController from './weather.controller';
import weatherService from 'services/weather.service'


import 'assets/styles/weather.scss'


export default angular.module( 'app.weather', [uirouter, weatherService] )
  .config( routing )
  .controller( 'WeatherController', WeatherController )
  .name;

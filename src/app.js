import 'assets/styles/screen.scss'

import angular from 'angular'
import uirouter from 'angular-ui-router'
import uibootstrap from 'angular-ui-bootstrap'


import routing from './routes'
import weather from './features/weather'
// import chart from 'directives/chart.directive'
import 'angular-google-chart'

angular
  .module('app', [uirouter, uibootstrap, weather, 'googlechart'])
  .config(routing);

angular.module('app').config(function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
});

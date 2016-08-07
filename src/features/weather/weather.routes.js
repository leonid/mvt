routes.$inject = ['$stateProvider'];

import template  from './weather.html';

export default function routes( $stateProvider ) {

  $stateProvider
    .state( 'weather', {
      template: template,
      url: '/',
      controller: 'WeatherController',
      controllerAs: 'vm'
    } );
}

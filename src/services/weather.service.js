import angular from 'angular'

class WeatherService {

  constructor( $http, $log, $q ) {
    this.log  = $log
    this.http = $http
    this.$q   = $q
  }

  getWeather( zip ) {
    const deferred = this.$q.defer();

    this.http.get( `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${zip}')and u='c'&format=json` ).then( ( data ) => {
      deferred.resolve( data.data.query.results.channel );
    }, (err) => {
      deferred.reject( err );
    } );
    return deferred.promise;
  }
}

WeatherService.$inject = ['$http', '$log', '$q']

export default angular.module( 'app.services', [] )
  .service( 'weatherService', WeatherService )
  .name;

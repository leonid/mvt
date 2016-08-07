export default class WeatherController {
  constructor( weatherService, $scope, $stateParams ) {
    this.uid = +$stateParams.uid;

    this.weatherService = weatherService
    this.$scope         = $scope

    this.zip = 'Москва'

    this.data = {
      type: 'LineChart',
      options: {
        'title': 'Средняя температура за 10 дней'
      },
      data: {
        'cols': [
          {id: 't', label: 'Дата', type: 'string'},
          {id: 's', label: 'Температура', type: 'number'}
        ], 'rows': []
      }
    }

    this.findWeather()
  }

  fetchWeather() {
    this.weatherService.getWeather( this.zip ).then( ( data ) => {
      this.place = data

      this.place.item.forecast.map( ( day ) => {
        this.data.data.rows.push( {
          c: [
            {v: day.date},
            {v: (parseInt( day.high ) + parseInt( day.low )) / 2}
          ]
        } )
      } )
    }, ( err ) => {
      this.error = err
    } );
  }

  findWeather() {
    this.place = '';
    this.fetchWeather();
  }

}

WeatherController.$inject = ['weatherService', '$scope', '$stateParams'];


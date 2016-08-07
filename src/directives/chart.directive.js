import angular from 'angular';

function chart() {
  return {
    restrict: 'A',
    link: function($scope, $elem, $attr) {
      let data = $scope[$attr.ngModel].dataTable;

      let options = {};
      if($scope[$attr.ngModel].title) {
        options.title = $scope[$attr.ngModel].title;
      }

      let googleChart = new google.visualization[$attr.googleChart]($elem[0]);
      googleChart.draw(data,options)
    }
  }
}

export default angular.module( 'app.directives', [] )
  .directive( 'chart', chart )
  .name;

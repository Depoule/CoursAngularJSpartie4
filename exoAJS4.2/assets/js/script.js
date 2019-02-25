var app = angular.module('App', []);
  app.controller('carsCtrl', function($scope, $http) {
    $http.get('assets/js/voiture.json').then(function (response) {
      $scope.carsArray = response.data;
    });
});

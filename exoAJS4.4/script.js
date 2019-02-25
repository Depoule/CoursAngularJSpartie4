
var app = angular.module('carApp', []);
//ici il faut ['$htpp', '$scope', avant la fonction
app.controller('carCtrl', ['$http', '$scope', function ($http, $scope) {
  //$http.get appelle le fichier .json
  $http.get('voiture.json').then(function (reponse) {
  //reponse.data retournela demande
  $scope.voiture = reponse.data;
  });
}]);

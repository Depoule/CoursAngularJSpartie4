var app = angular.module('carApp', []);
  //ici il faut ['$htpp', '$scope', avant la fonction
  app.controller('carCtrl', ['$http', '$scope', function ($http, $scope) {
  //$http.get appelle le fichier .json
    $http.get('assets/js/voiture.json').then(function (reponse) {
      //reponse.data retourne la demande
    $scope.voiture = reponse.data;
  });
}]);

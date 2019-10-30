'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Calcular a Área';
    $scope.area = 0;
    $scope.calcular = function (medida) {
      $scope.area = medida.lado1 * medida.lado2;
      delete $scope.medida;
    }
  }
]);
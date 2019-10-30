'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Temperatura em Fahrenheit ' ;
    $scope.temC = 0 ;
    $scope.calcular = function ( valor ) {
    $scope.temC = (( valor.temF - 32 ) * 5 ) / 9 ;
    delete $scope.valor ;
    }
  }
]);
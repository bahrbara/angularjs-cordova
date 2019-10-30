'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Apresente seu antecessor' ;
    $scope.antecessor = 0 ;
    $scope.calcular = function (valor) {
    $scope.antecessor = valor.numero - 1 ;
    delete $scope.valor ;
    }
  }
]);
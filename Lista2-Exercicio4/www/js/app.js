'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Salario mensal e o Reajuste' ;
    $scope.area = 0 ;
    $scope.calcular = function ( valor ) {
    $scope.area = valor.salarioAtual + (valor.salarioAtual*(valor.reajuste/100));
    delete $scope.valor ;
    }
  }
]);
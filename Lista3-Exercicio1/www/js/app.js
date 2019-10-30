'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Apresente o resultado POSITIVO' ;
    $scope.resultado = 0 ;
    $scope.calcular = function ( total ) {
    $scope.resultado = total.primeiro + total.segundo ;
    if ( $scope.resultado < 100 ){
    $scope.resultado = 0 ;
    }
    delete $scope.total ;
    }
  }
]);
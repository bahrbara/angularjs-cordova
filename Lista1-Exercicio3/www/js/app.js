'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope. app = 'Calcular total compra e poupança (Pães e Broas)' ;
      $scope.total = 0 ;
      $scope.poupanca = 0 ;
      $scope.calcular = function ( compra ) {
      $scope.total = (compra.pao * 0.12 ) + (compra.broa * 1.50 );
      $scope.poupanca = $scope.total * 0.1 ;
      delete $scope.compra ;
    }
  }
]);
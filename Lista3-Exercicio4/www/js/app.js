'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Personagem morreu SIM ou NÃO depois do ataque' ;
    $scope.area = 0 ;
    $scope.calcular = function ( resultado ) {
    $scope.area = resultado.dano , resultado.saude ;
    if ( resultado.dano >= resultado.saude ){
    $scope.area = "morreu" ;
    } else {
    $scope.area = "não morreu" ;
    }
    delete $scope.resultado ;
    }
  }
]);
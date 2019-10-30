'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Total de Eleitores' ;
    $scope.calcular = function ( resultado ) {
    $scope.perbrancos = (resultado.votosBrancos * 100)/resultado.eleitores;
    $scope.pernulos = (resultado.votosNulos * 100)/resultado.eleitores;
    $scope.pervalidos = (resultado.votosValidos * 100)/resultado.eleitores;
    delete $scope.resultado ;
    }
  }
]);
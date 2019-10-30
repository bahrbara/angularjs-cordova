'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope. app = 'Quantidade Ferraduras Necessárias' ;
    $scope. qtd = 0 ;
    $scope. calcular = function ( quantidade ) {
    $scope. qtd = quantidade * 4 ;
    delete $scope. quantidade ;
    }
  }
]);
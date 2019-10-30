'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Calcular quantos dia de vida' ;
    $scope.dias = 0 ;
    $scope.nome = '' ;
    $scope.calcular = function (pessoa) {
    $scope.dias = (pessoa.idade * 365 );
    $scope.nome = pessoa.nome ;
    delete $scope.pessoa ;
    }
  }
]);
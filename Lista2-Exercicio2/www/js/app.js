'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Dimensões de um retângulo' ;
    $scope.area = 0 ;
    $scope.calcular = function (dimensao) {
    $scope.area = dimensao.lado1 * dimensao.lado2 ;
    delete $scope.dimensao;
    }
  }
]);
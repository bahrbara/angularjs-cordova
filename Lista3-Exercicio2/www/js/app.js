'use strict';

var app = angular.module('app', [])
.controller('AppCtrl', ['$scope',
  function ($scope) {

    $scope.app = 'Tabuada' ;
    $scope.tabuadas = [];
    $scope.adicionarTabuada = function ( numero ) {
    var x ;
    for ( x = 1 ; x <= 10 ; x ++) {
    $scope.tabuadas.push ({ tabuada: numero + 'x' + x ,
    numero: numero * x });
    }
    delete $scope.numero ;
    }
  }
]);
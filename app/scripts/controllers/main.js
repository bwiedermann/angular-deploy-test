'use strict';

/**
 * @ngdoc function
 * @name angularDeployTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDeployTestApp
 */
angular.module('angularDeployTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name angularDeployTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDeployTestApp
 */
angular.module('angularDeployTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

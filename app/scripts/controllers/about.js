'use strict';

/**
 * @ngdoc function
 * @name gitLuckyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gitLuckyApp
 */
angular.module('gitLuckyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

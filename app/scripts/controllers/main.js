'use strict';

/**
 * @ngdoc function
 * @name gitLuckyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitLuckyApp
 */
angular.module('gitLuckyApp')
  .controller('MainCtrl', function ($scope, GithubAPIService) {
    $scope.languageOptions = [
      'Ruby',
      'JavaScript',
      'Python',
      'Shell'
    ];
    $scope.language = '';

    $scope.getIssues = function(){
      // console.log('getting the issues for language ' + $scope.language);
      GithubAPIService.searchIssues($scope.language)
        .success(function(data){
          $scope.results = data.items;
          console.log(data);
        })
        .error(function(err){
          console.warn(err);
        });
    };
  });

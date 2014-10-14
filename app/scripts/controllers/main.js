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

    $scope.issueCount = 0;

    $scope.loading = false;

    $scope.incrementCount = function(){
      $scope.issueCount++;
      // $scope.loading = true;
      // $scope.getRepoInfo($scope.results[$scope.issueCount]);
      console.log($scope.issueCount);
    };

    $scope.getRepoInfo = function(){
      GithubAPIService.getRepoInfo($scope.results[$scope.issueCount].url)
        .success(function(data){
          $scope.repoInfo = data;
          // $scope.loading = false;
        })
        .error(function(err){
          console.warn(err);
        });
    };
    $scope.getIssues = function(){
      // console.log('getting the issues for language ' + $scope.language);
      GithubAPIService.searchIssues($scope.language)
        .success(function(data){
          $scope.results = data.items;
          // $scope.getRepoInfo($scope.results[0]);
          console.log(data);
        })
        .error(function(err){
          console.warn(err);
        });
    };
  });

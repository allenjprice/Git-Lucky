'use strict';

angular.module('gitLuckyApp')
  .service('GithubAPIService', function($http){
    return {
      apiPath: 'https://api.github.com/search/issues?q=+state:open+language:',

      searchIssues: function(language){
        return $http({
          method: 'GET',
          url: this.apiPath + language + '&per_page=100'
        });
      }
    };
  });
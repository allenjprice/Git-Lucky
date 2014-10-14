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
      },

      getRepoInfo: function(issueUrl){
        var splitUrl = issueUrl.split('/');
        splitUrl.pop();
        splitUrl.pop();
        var repoUrl = splitUrl.join('/');

        return $http({
          method: 'GET',
          url: repoUrl
        });
      }

    };
  });
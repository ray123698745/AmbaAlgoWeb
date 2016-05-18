'use strict';

angular.module('algoWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('query', {
        url: '/query',
        template: '<query></query>'
      });
  });

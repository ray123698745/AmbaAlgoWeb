'use strict';

angular.module('algoWebApp', [
  'algoWebApp.auth',
  'algoWebApp.admin',
  'algoWebApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

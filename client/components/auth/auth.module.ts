'use strict';

angular.module('algoWebApp.auth', [
  'algoWebApp.constants',
  'algoWebApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

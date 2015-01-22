'use strict';

angular.module('ita.challenges').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('challenges example page', {
      url: '/challenges/example',
      templateUrl: 'challenges/views/index.html'
    });
  }
]);

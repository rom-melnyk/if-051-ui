'use strict';

angular.module('ita.feed').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('feed example page', {
      url: '/feed/example',
      templateUrl: 'feed/views/index.html'
    });
  }
]);

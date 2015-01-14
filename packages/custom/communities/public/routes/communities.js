'use strict';

angular.module('mean.communities').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('communities example page', {
      url: '/communities/example',
      templateUrl: 'communities/views/index.html'
    });
  }
]);

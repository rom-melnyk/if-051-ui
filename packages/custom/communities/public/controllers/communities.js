'use strict';

/* jshint -W098 */
angular.module('mean.communities').controller('CommunitiesController', ['$scope', 'Global', 'Communities',
  function($scope, Global, Communities) {
    $scope.global = Global;
    $scope.package = {
      name: 'communities'
    };
  }
]);

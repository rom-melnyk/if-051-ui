'use strict';

/* jshint -W098 */
angular.module('ita.feed').controller('FeedController', ['$scope', 'Global', 'Feed',
  function($scope, Global, Feed) {
    $scope.global = Global;
    $scope.package = {
      name: 'feed'
    };
  }
]);

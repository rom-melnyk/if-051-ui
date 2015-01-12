'use strict';

angular.module('ita.theme').config(['$meanStateProvider',
  function($meanStateProvider) {
    $meanStateProvider.state('theme example page', {
      url: '/theme/example',
      templateUrl: 'theme/views/index.html'
    });
  }
]);

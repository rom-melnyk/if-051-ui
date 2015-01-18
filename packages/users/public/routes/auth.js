'use strict';

// $viewPathProvider, to allow overriding system default views
angular.module('ita.users').provider('$viewPath', function() {
  function ViewPathProvider() {
    var overrides = {};

    this.path = function(path) {
      return function() {
        return overrides[path] || path;
      };
    };

    this.override = function(defaultPath, newPath) {
      if (overrides[defaultPath]) {
        throw new Error('View already has an override: ' + defaultPath);
      }
      overrides[defaultPath] = newPath;
    };

    this.$get = function() {
      return this;
    };
  }

  return new ViewPathProvider();
}); 



// $meanStateProvider, provider to wire up $viewPathProvider to $stateProvider
angular.module('ita.users').provider('$meanState', ['$stateProvider', '$viewPathProvider', function($stateProvider, $viewPathProvider) {
  this.state = function(stateName, data) {
    if (data.templateUrl) {
      data.templateUrl = $viewPathProvider.path(data.templateUrl);
    }
    $stateProvider.state(stateName, data);
    return this;
  };

  this.$get = function() {
    return this;
  };
}]);





//Setting up route
angular.module('ita.users').config(['$meanStateProvider',
  function($meanStateProvider) {
    // Check if the user is not connected
    var checkLoggedOut = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/logged-in').success(function(user) {
        // Authenticated
        if (user !== '0') {
          $timeout(deferred.reject);
          $location.url('/login');
        }

        // Not Authenticated
        else $timeout(deferred.resolve);
      });

      return deferred.promise;
    };


    // states for my app
    $meanStateProvider
      .state('auth', {
        url: '/auth',
        templateUrl: 'users/views/index.html'
      })
      .state('auth.login', {
        url: '/login',
        templateUrl: 'users/views/login.html',
        resolve: {
          loggedin: checkLoggedOut
        }
      })
      .state('auth.register', {
        url: '/create-user',
        templateUrl: 'users/views/create-user.html',
        resolve: {
          loggedin: checkLoggedOut
        }
      });
  }
]);

'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Theme = new Module('theme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Theme.register(function(app, auth, database) {

  Theme.aggregateAsset('css', 'loginForms.css');
  Theme.aggregateAsset('css', 'theme.css');

  return Theme;
});

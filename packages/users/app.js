'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var modUser = new Module('users');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
modUser.register(function(app, auth, passport, database) {

  //We enable routing. By default the Package Object is passed to the routes
  modUser.routes(app, auth, database, passport);

  //We are adding a link to the main menu for all authenticated users
  // modUser.menus.add({
  //     title: 'itaUser example page',
  //     link: 'itaUser example page',
  //     roles: ['authenticated'],
  //     menu: 'main'
  // });

  modUser.aggregateAsset('js', 'itaUser.js');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    modUser.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    modUser.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settings
    modUser.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return modUser;
});

'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Communities = new Module('communities');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Communities.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Communities.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Communities.menus.add({
    title: 'communities example page',
    link: 'communities example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Communities.aggregateAsset('css', 'communities.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Communities.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Communities.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Communities.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Communities;
});

'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Communities, app, auth, database) {

  app.get('/communities/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/communities/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/communities/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/communities/example/render', function(req, res, next) {
    Communities.render('index', {
      package: 'communities'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};

'use strict';

// User routes use users controller
var users = require('../controllers/users');

module.exports = function(modUser, app, auth, database, passport) {

  app.route('/api/logout')
    .get(users.signout);
  app.route('/api/users/me')
    .get(users.me);

  // Setting up the users api
  app.route('/api/create-user')
    .post(users.create);

  // Setting up the userId param
  app.param('userId', users.user);

  // AngularJS route to check for authentication
  app.route('/api/logged-in')
    .get(function(req, res) {
      res.send(req.isAuthenticated() ? req.user : '0');
    });

  // Setting the local strategy route
  app.route('/api/login')
    .post(passport.authenticate('local', {
      failureFlash: true
    }), function(req, res) {
      res.send({
        user: req.user,
        redirect: (req.user.roles.indexOf('admin') !== -1) ? req.get('ref') : false
      });
    });
};

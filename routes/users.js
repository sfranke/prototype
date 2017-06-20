const express = require('express')
const router = express.Router()
const database = require('./database')
const util = require('util')

// This route will render a list of all users in the database and render it for the client.
// This route will only be rendered for users that are logged in and have the 'admin' permission.
// In any other case this route will redirect to the landing page.
router.get('/', function (req, res, next) {
  // If the user does not have a valid session redirect to '/register' route.
  if (!req.session.user) {
    return res.redirect('/register')
  }
  // If the user does not have a valid session and is not an admin, redirect to the landing page.
  if (req.session.user.permission === 'admin') {
    database.getAllUsers(function (error, users) {
      if (error) console.log('Error while getAllUsers.')
      res.render('users', {title: 'Users', session: req.session, users: users})
    })
  } else {
    return res.redirect('/')
  }
})

// This route will the will delete a given user by its 'id'. The response will be a json object
// containing a message stating 'success' or fail silently.
// TODO: Consider changing the silently failing part.
router.post('/delete/:id', function (req, res, next) {
  if (!req.session.user) {
    return res.redirect('/register')
  }
  if (req.session.user.permission === 'admin') {
    database.deleteUser(req.params.id, function (error, doc) {
      if (error) console.log('Error while deleteUser.', error)
      res.json({message: 'success'})
    })
  }
})

// This route will cahnge the 'permission' attribute of a given user. It expects a POST request with optional
// parameters for 'id' and 'permission'.
router.post('/updateUser/:id/:permission', function (req, res, next) {
  // If the user does not have a valid session redirect to '/register' route.
  if (!req.session.user) {
    return res.redirect('/register')
  }
  // If the user does not have a valid session and is not an admin, do not provide any feedback.
  if (req.session.user.permission === 'admin') {
    // Minimal approach to validating input data.
    // TODO: Proper validation should be added here.
    if (req.params.id !== 'undefined' && req.params.permission !== 'undefined') {
      let user = {}
      user._id = req.params.id
      user.permission = req.params.permission
      database.updateUserPermission(user, user.permission, function (error, doc) {
        if (error) console.log('Error after database.updateUserPermission: ' + util.inspect(error))
        // Returns a message on success. The actual document in the callback does not
        // contain the most recent user object. Instead it's the one that got passed into
        // the database function.
        // TODO: Consider adjusting this. Maybe the database function returns a success and/or fail message.
        res.json({message: 'admin'})
      })
    } else {
      res.json({message: 'fail'})
    }
  }
})

module.exports = router

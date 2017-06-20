const express = require('express')
const router = express.Router()
const moment = require('moment')
const bcrypt = require('bcrypt')
const database = require('./database.js')
const util = require('util')
const hash = require('./hash.js')

// GET the landing page. On first start up a generic admin user is generated and stored to the database.
// You can find the login password in the console log. This is a temporary approach to ensure there is a
// admin user available to login.
// TODO: Find a better solution for this.
router.get('/', function(req, res, next) {
  let adminUser = {
    'name': 'Admin',
    'email': 'admin@localhost.com',
    'password': null,
    'gender': 'Herr',
    'permission': 'admin'
  }
  database.getUser(adminUser, function (error, response) {
    if (error) {
      console.log('No admin user found! Generating a new one..\n' + util.inspect(error))
      // Create random login password and console log it to the terminal.
      adminUser.password = Math.random().toString(32).slice(2)
      console.log('ADMIN PASSWORD: ' + adminUser.password)
      // Hash the password of the admin user..
      hash.generateHashedPassword(adminUser.password, function (error, password) {
        if (error) console.log('error', 'Error while saving user.')
        adminUser.password = password
        // ..and save it to the database.
        database.saveUser(adminUser, function (error, user) {
          if (error) console.log('error', 'Error while saving user.' + util.inspect(error))
          if (user != null) {
            console.log('Admin user created and saved!' + util.inspect(user))
          }
        })
      })
    }
  })
  // serverTime() is a function that is ready to emit a 'serverTime' event via a websocket.
  // The client is able to react to the event and potentionally display the server's time
  // every so often. Currently set to once each second.
  // TODO: Consider to display the server time to the user.
  serverTime();
  res.render('index', { title: 'iTest', session: req.session })
})

// Function to send the current server time once every second to the connected websocket.
// Formatted using 'moment'.
function serverTime () {
  setInterval(function () {
    io.emit('serverTime', moment(new Date().getTime()).format('HH:mm:ss'))
  }, 1000)
}

module.exports = router

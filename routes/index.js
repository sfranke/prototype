const express = require('express')
const router = express.Router()
const moment = require('moment')
const bcrypt = require('bcrypt')
const database = require('./database.js')
const util = require('util')
const hash = require('./hash.js')

/* GET index page. */
router.get('/', function(req, res, next) {
  let adminUser = {
    'name': 'Admin',
    'email': 'admin@localhost.com',
    'password': null,
    'gender': null,
    'permission': 'admin'
  }
  database.getUser(adminUser, function (error, response) {
    if (error) {
      console.log('Error while looking for admin user.\n' + util.inspect(error))
      // Create admin user here!
      adminUser.password = Math.random().toString(32).slice(2)
      console.log('ADMIN PASSWORD: ' + adminUser.password)
      hash.generateHashedPassword(adminUser.password, function (error, password) {
        if (error) console.log('error', 'Error while saving user.')
        adminUser.password = password
        database.saveUser(adminUser, function (error, user) {
          if (error) console.log('error', 'Error while saving user.' + util.inspect(error))
          if (user != null) {
            console.log('Admin user created and saved!' + util.inspect(user))
          }
        })
      })
    }
  })
  serverTime();
  res.render('index', { title: 'iTest', session: req.session })
})

function serverTime () {
  setInterval(function () {
    io.emit('serverTime', moment(new Date().getTime()).format('HH:mm:ss'))
  }, 1000)
}

module.exports = router

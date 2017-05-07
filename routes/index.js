var express = require('express')
var router = express.Router()
var moment = require('moment')
var bcrypt = require('bcrypt')
var database = require('./database.js')
var util = require('util')

/* GET index page. */
router.get('/', function(req, res, next) {

  console.log('Session:', req.session)
  var adminUser = {
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
      generateHashedPassword(adminUser.password, function (error, password) {
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

function generateHashedPassword (password, callback) {
  var hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(9))
  // console.log('Hashed password:', hashedPassword)
  callback(null, hashedPassword)
};

module.exports = router;

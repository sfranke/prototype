var express = require('express')
var router = express.Router()
var database = require('./database')
var bcrypt = require('bcrypt')
var util = require('util')
var pool = require('./pool.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log('USERDATA: ' + util.inspect(req.session.user))
  if (!req.session.user) {
    return res.redirect('/')
  }
  // Only render this route if user has valid session and proper permission.
  if (req.session.user.permission === 'admin' || req.session.user.permission === 'user') {
    res.render('test', {title: 'test', name: undefined, session: req.session, pool: pool})
  }
})

router.post('/', function (req, res, next) {
  var user = {'email': req.body.email, 'password': req.body.password}
  database.getUser(user, function (error, user) {
    if (error) console.log('Error while getting user: ' + util.inspect(error))
    if (user != null) {
      if (bcrypt.compareSync(req.body.password, user.password) === true) {
        // console.log('Password correct!'.green.bold)
        req.session.user = user
        res.redirect('/test')
      } else {
        // console.log('Wrong password!'.bold.red)
        return res.redirect('/register')
      }
    } else {
      return res.redirect('/register')
    }
  })
})

module.exports = router

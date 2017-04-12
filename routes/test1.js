var express = require('express')
var router = express.Router()
var database = require('./database')
var bcrypt = require('bcrypt')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test1', { title: 'Express' })
})

router.post('/', function (req, res, next) {
  var user = {'email': req.body.email, 'password': req.body.password}
  database.getUser(user, function (error, user) {
    if (error) console.log('Error while getting user: ' + util.inspect(error))
    if (user != null) {
      if (bcrypt.compareSync(req.body.password, user.password) === true) {
        // console.log('Password correct!'.green.bold)
        req.session.user = user
        res.redirect('/test1')
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

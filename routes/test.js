const express = require('express')
const router = express.Router()
const database = require('./database')
const bcrypt = require('bcrypt')
const util = require('util')
const Question = require('./question')
const QuestionPool = require('./questionPool')

let poolSize = 40

// Generate a 'QuestionPool' and render it for the client.
router.get('/', function(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/')
  }
  // Only render this route if user has valid session and proper permission.
  if (req.session.user.permission === 'admin' || req.session.user.permission === 'user') {
    let testPool = new QuestionPool()
    QuestionPool.getPool(testPool, poolSize, function(error, questionPool) {
      if(error) console.log(error)
      // Render site here to make sure the questionPool is ready to use before the site gets rendered.
      res.render('test', {title: 'test', name: undefined, session: req.session, pool: questionPool})
    })
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

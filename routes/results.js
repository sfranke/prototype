const express = require('express')
const router = express.Router()
const database = require('./database')
const bcrypt = require('bcrypt')
const util = require('util')

router.get('/', function (req, res, next) {
  if (!req.session.user) {
    return res.redirect('/')
  } else {
    res.render('results', {title: 'Results', session: req.session})
  }
})

router.post('/', function (req, res, next) {
  console.log('body: ' + util.inspect(req.body))
  console.log('Pool: ' + req.body.pool)
  console.log('result: ' + req.body.result)
  if (!req.session.user) {
    return res.redirect('/')
  }
  // Only render this route if user has valid session and proper permission.
  if (req.session.user.permission === 'admin' || req.session.user.permission === 'user') {
  }
})

module.exports = router

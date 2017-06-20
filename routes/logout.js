var express = require('express')
var router = express.Router()

// GETting the logout route will clear/delete the session of the current user
// and then redirect to the landing page.
router.get('/', function (req, res, next) {
  req.session.user = null
  res.redirect('/')
})

// POSTing the logout route clears/deletes the session. Also redirects
// to the landing page.
router.post('/', function (req, res, next) {
  req.session.user = null
  res.redirect('/')
})

module.exports = router

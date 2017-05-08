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
    // console.log('Pool:\n' + req.body.pool)
    // console.log('Result:\n' + req.body.result)
    let pool = JSON.parse(req.body.pool)
    let result = JSON.parse(req.body.result)
    console.log('Pool object:\n' + util.inspect(pool))
    console.log('Result object:\n' + util.inspect(result))
    // console.log('Pool length: ' + Object.keys(pool).length)
    // console.log('Result length: ' + Object.keys(result).length)
    if (Object.keys(result).length == Object.keys(pool).length) {
      console.log('All questions answered.')
    } else {
      console.log('Not all questions answered.')
      console.log(Object.keys(result).length + ' of ' + Object.keys(pool).length + ' questions have been answered.' )
      checkResults(result, pool, function (error, response) {
        console.log('done.')
      })
    }
  }
})

function checkResults(result, pool, callback) {
  let maxAnswers = Object.keys(pool).length
  let correctAnswers = 0
  let wrongAnswers = 0
  for (let key in result) {
    console.log('Result key: ' + key + ' value is: ' + result[key])
    if (result[key] == pool[key]) {
      console.log('answer is correct: ' + key + ' value of \'result\' is: ' + result[key] + ' value of \'pool\' is: ' + pool[key])
      correctAnswers++
    } else {
      console.log('Answer is NOT correct: ' + key + ' value is: ' + result[key] + ' value of \'pool\' is: ' + pool[key])
      wrongAnswers++
    }
  }
  console.log('Correct: ' + correctAnswers)
  console.log('Wrong: ' + wrongAnswers)
}

module.exports = router

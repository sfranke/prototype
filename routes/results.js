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
  if (!req.session.user) {
    return res.redirect('/')
  }
  // Only render this route if user has valid session and proper permission.
  if (req.session.user.permission === 'admin' || req.session.user.permission === 'user') {
    let pool = JSON.parse(req.body.pool)
    let testPool = JSON.parse(req.body.testPool)
    let result = JSON.parse(req.body.result)
    generateStatistics(result, testPool, function (error, response) {
      // TODO: This where i want to redirect to the Results page.
    })
  }
})

// Expects the result object, the pool object and will call back a set of calculated statistics.
function generateStatistics(result, testPool, callback) {
  let callbackResults = {}
  let maxAnswers = Object.keys(testPool).length
  let correctAnswers = 0
  let myCategories = {}

  // Get categories and category count
  let categories = Object.keys(testPool).map(function (question) { return testPool[question].category })
  let cleanCategories = categories.filter(function (currentValue, index) {
    return index == categories.indexOf(currentValue)
  })
  for (var categ0ry in cleanCategories) {
    let count = 0
    for (var cat in Object.values(categories)) {
      if (cleanCategories[categ0ry] == categories[cat]) {
        ++count;
      }
    }
    myCategories[cleanCategories[categ0ry]] = {}
    myCategories[cleanCategories[categ0ry]].max = count
    myCategories[cleanCategories[categ0ry]].correct = 0
  }
  // Check correctness of the result object in comparison to the pool.
  // For each element in the result object iterate over the pool and check for equality.
  // If found add to the points a user can get, sum them up and save then into one object.
  for (let key in result) {
    testPool.forEach(function (question) {
      if (question.hasOwnProperty(key)) {
        const vals = Object.keys(question).map(key => question[key])
        if(result[key] == vals[0]) {
          correctAnswers++
          myCategories[vals[1]].correct = myCategories[vals[1]].correct + 1
        }
      }
    })
  }
  // Accumulate all data into one single object that we can use to propagate the result page.
  // TODO: Username and gender are missing here. Please add.
  callbackResults.maxAnswers = maxAnswers
  callbackResults.correctAnswers = correctAnswers
  callbackResults.percentage = (correctAnswers / maxAnswers) * 100
  callbackResults.pool = testPool
  callbackResults.result = result
  callbackResults.categories = myCategories
  // TODO: Debug output.. please remove.
  console.log('Results:\n' + util.inspect(callbackResults))
  callback(null, callbackResults)
}

module.exports = router

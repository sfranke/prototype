const express = require('express')
const router = express.Router()
const database = require('./database')
const bcrypt = require('bcrypt')
const util = require('util')

const jadepdf = require('jade-pdf2')
const fs = require('fs')
const path = require('path')

var bodyParser = require('body-parser')

let options = {}
options.phantomPath = path.resolve(__dirname) + '/../node_modules/phantomjs/lib/phantom/bin/phantomjs'
options.cssPath = path.resolve(__dirname) + '/../public/css/bootstrap.css'
options.locals = {}

router.get('/:object?', function (req, res, next) {
  // console.log('req:\n' + util.inspect(req))
  console.log('req.params.object:\n' + util.inspect(req.params))
  console.log('req.params:\n' + util.inspect(req.params.maxAnswers))
  if (!req.session.user) {
    return res.redirect('/')
  } else {
    // res.render('results', {title: 'Results', options: options})
    res.json({'Test': 'YES, HERE I AM!'})
  }
})

router.post('/', function (req, res, next) {
  if (!req.session.user) {
    return res.redirect('/')
  }
  // Only render this route if user has valid session and proper permission.
  if (req.session.user.permission === 'admin' || req.session.user.permission === 'user') {
    // let pool = JSON.parse(req.body.pool)
    let testPool = JSON.parse(req.body.testPool)
    let result = JSON.parse(req.body.result)
    generateStatistics(result, testPool, function (error, response) {
      // Debug output.
      console.log('error' + error)
      console.log('response ' + util.inspect(response))
      // TODO: This where i want to redirect to the Results page.
      // Populating response object with user data.
      response.user = req.session.user
      if (error) console.log('Error while statistics callback is received.\n' + error)
      // Sending response object to view.
      res.status(200).json(response)
      // TODO: Encapsulate in one function that prepares rendering and saving the pdf.
      console.log('PathTest: ' + path.resolve(__dirname))
      fs.createReadStream(path.resolve(__dirname) + '/../views/results.jade')
        .pipe(jadepdf(options))
        .pipe(fs.createWriteStream('document.pdf'))
    })
  }
})

// Expects the result object, the pool object and will call back a set of calculated statistics.
// Which include 'maxAnswers', 'correctAnswers', 'percentage', the initial pool (list of questions)
// and a 'categories' object holding an object of categories and their detail information ('max',
// correct, points and maxPoints(per categorie)).
function generateStatistics(result, testPool, callback) {
  let callbackResults = {}
  let maxAnswers = Object.keys(testPool).length
  let correctAnswers = 0
  let myCategories = {}

  // Get categories and category count
  // let categories = Object.keys(testPool).map(function (question) { return testPool[question].category })
  const categories = Object.keys(testPool).map((question) => { return testPool[question].category })
  // let cleanCategories = categories.filter(function (currentValue, index) {
  //   return index == categories.indexOf(currentValue)
  // })
  const cleanCategories = categories.filter((currentValue, index) => { return index == categories.indexOf(currentValue) })

  for (let categ0ry in cleanCategories) {
    let count = 0
    for (let cat in Object.values(categories)) {
      if (cleanCategories[categ0ry] == categories[cat]) {
        ++count;
      }
    }
    myCategories[cleanCategories[categ0ry]] = {}
    myCategories[cleanCategories[categ0ry]].category = cleanCategories[categ0ry]
    myCategories[cleanCategories[categ0ry]].max = count
    myCategories[cleanCategories[categ0ry]].correct = 0
    myCategories[cleanCategories[categ0ry]].points = 0
    myCategories[cleanCategories[categ0ry]].maxPoints = 0
  }

  testPool.forEach(function (testPoolQuestion) {
    // console.log('testPoolQuestion: ' + util.inspect(testPoolQuestion))
    // console.log('testPool category: ' + testPoolQuestion.category)
    // console.log('testPool weight: ' + testPoolQuestion.weight)
    myCategories[testPoolQuestion.category].maxPoints = myCategories[testPoolQuestion.category].maxPoints + (1 * testPoolQuestion.weight)
  })

  // Check correctness of the result object in comparison to the pool.
  // For each element in the result object iterate over the pool and check for equality.
  // If found add to the points a user can get, sum them up and save then into one categories object.
  for (let key in result) {
    testPool.forEach(function (question) {
      if (question.hasOwnProperty(key)) {
        const vals = Object.keys(question).map(key => question[key])
        if(result[key] == vals[0]) {
          // Adding up correct answers.
          correctAnswers++
          myCategories[vals[1]].correct = myCategories[vals[1]].correct + 1
          // Adding up points depending on the weight of each answer.
          myCategories[vals[1]].points = myCategories[vals[1]].points + (1 * vals[2])
        }
      }
    })
  }

  // Accumulate all data into one single object that we can use to propagate the result page.
  // TODO: Username and gender are missing here. Please add.
  callbackResults.maxAnswers = maxAnswers
  callbackResults.correctAnswers = correctAnswers
  callbackResults.percentage = ((correctAnswers / maxAnswers) * 100).toFixed(0)
  callbackResults.pool = testPool
  callbackResults.result = result
  callbackResults.categories = myCategories
  options.locals = callbackResults
  // TODO: Debug output.. please remove.
  console.log('Results:\n' + util.inspect(callbackResults))
  callback(null, callbackResults)
}

module.exports = router

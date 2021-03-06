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
options.paperFormat = 'A4'
options.locals = {}

// Returns the current date preformatted for germans.
getCurrentDate = function() {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()
  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  return today = dd + '.' + mm + '.' + yyyy
}

// This route will handle to display the results of the test on the client side.
// The locals object will be ready before this route is being randered.
router.get('/', function (req, res, next) {
  let locals = options.locals
  if (!req.session.user) {
    return res.redirect('/')
  } else {
    return res.render('result', {locals: locals, time: getCurrentDate()})
  }
})

// This is where the resuls object from the client is received. Calculation of the results is performed
// within this scope. The statistics of this user's test are being generated. The second last step of this process
// is rendering a PDF file which is stored on the file system. Last step is a rediret to the GET route to display
// the results on the client side.
router.post('/', function (req, res, next) {
  if (!req.session.user) {
    return res.redirect('/')
  }
  // Only render this route if user has valid session and proper permission.
  if (req.session.user.permission === 'admin' || req.session.user.permission === 'user') {
    let testPool = JSON.parse(req.body.testPool)
    let result = JSON.parse(req.body.result)
    generateStatistics(result, testPool, function (error, response) {
      // TODO: This where i want to redirect to the Results page.
      // Populating response object with user data.
      response.user = req.session.user
      if (error) console.log('Error while statistics callback is received.\n' + error)
      // TODO: Encapsulate in one function that prepares rendering and saving the pdf.
      options.locals.time = getCurrentDate()
      fs.createReadStream(path.resolve(__dirname) + '/../views/results.jade')
        .pipe(jadepdf(options))
        .pipe(fs.createWriteStream(new Date().getTime() + '_' + response.user.name + '_' + 'document.pdf'))
    })
    res.redirect('/results')
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
  let overall = [0.0, 0.0]

  const categories = Object.keys(testPool).map((question) => { return testPool[question].category })
  const cleanCategories = categories.filter((currentValue, index) => { return index == categories.indexOf(currentValue) })

  // Sort the 'testPool' object by category. Count the occurence of questions depending on the catagory they are
  // in. Then add additional attributes like 'max', 'correct', 'points', and 'maxPoints' for population later.
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

  // Generate an object that holds the possible maximum points per category.
  // Also generate a statistic for possible maximum points overall.
  testPool.forEach(function (testPoolQuestion) {
    myCategories[testPoolQuestion.category].maxPoints = myCategories[testPoolQuestion.category].maxPoints + (1 * testPoolQuestion.weight)
    overall[1] = overall[1] + (1 * testPoolQuestion.weight)
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
          // Also add up the points gathered during the test.
          overall[0] = overall[0] + (1 * vals[2])
        }
      }
    })
  }

  // Accumulate all data into one single object that we can use to propagate the result page.
  // TODO: Username and gender are missing here. Please add.
  callbackResults.maxAnswers = maxAnswers
  callbackResults.correctAnswers = correctAnswers
  callbackResults.percentage = ((correctAnswers / maxAnswers) * 100).toFixed(0)
  callbackResults.overall = overall
  callbackResults.pool = testPool
  callbackResults.result = result
  callbackResults.categories = myCategories
  options.locals = callbackResults
  callback(null, callbackResults)
}

module.exports = router

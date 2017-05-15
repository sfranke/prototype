const express = require('express')
const router = express.Router()
const database = require('./database')
const bcrypt = require('bcrypt')
const util = require('util')

const jadepdf = require('jade-pdf2')
const fs = require('fs')
const path = require('path')

const testData = {
  maxAnswers: 14,
  correctAnswers: 2,
  percentage: 54.285714285714285,
  pool: [
     { '102': 1, category: 'Benutzer' },
     { '101': 1, category: 'Benutzer' },
     { '100': 1, category: 'Benutzer' },
     { '112': 2, category: 'Technik' },
     { '104': 3, category: 'Benutzer' },
     { '110': 1, category: 'Technik' },
     { '107': 1, category: 'Programmieren' },
     { '105': 1, category: 'Technik' },
     { '108': 1, category: 'Web' },
     { '111': 0, category: 'Technik' },
     { '106': 1, category: 'Benutzer' },
     { '109': 0, category: 'Web' },
     { '113': 2, category: 'Programmieren' },
     { '103': 1, category: 'Benutzer' }
  ],
  result: {
    '101': 2,
    '102': 3,
    '105': 2,
    '107': 2,
    '109': 1,
    '112': 2,
    '113': 2
  },
  categories: {
    Benutzer: { max: 6, correct: 0 },
    Technik: { max: 4, correct: 1 },
    Programmieren: { max: 2, correct: 1 },
    Web: { max: 2, correct: 0 }
  },
  user:
  { _id: '590f29537259a6227ff9954b',
    name: 'TestPerson2',
    password: '$2a$09$ZXuyQHb46hsy.PmaVZbVoudL3iZrxRd4595zdZauuyc51ovQnRA22',
    permission: 'user',
    email: '2@2.2',
    gender: 'male'
  }
}

const options = {}
options.phantomPath = '/home/cringer/git/zzz/prototype/node_modules/phantomjs/lib/phantom/bin/phantomjs'
options.cssPath = path.resolve(__dirname) + '/../public/css/bootstrap.css'
options.locals = testData

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
      response.user = req.session.user
      console.log('error' + error)
      console.log('response ' + util.inspect(response))
      if (error) console.log('Error while statistics callback is received.\n' + error)
      res.status(200).json(response)
      console.log('PathTest: ' + path.resolve(__dirname))
      fs.createReadStream(path.resolve(__dirname) + '/../views/results.jade')
        .pipe(jadepdf(options))
        .pipe(fs.createWriteStream('document.pdf'))
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
  for (let categ0ry in cleanCategories) {
    let count = 0
    for (let cat in Object.values(categories)) {
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

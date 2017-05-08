const database = require('./database.js')
const util = require('util')
const events = require('events')
const async = require('async')

let maxAmountOfQuestions = database.getQuestionCount(function (error, result) {
  maxAmountOfQuestions = result
})

let testIndexes = []
let pool = []

function questionPool() {
  this.pool = []
}

// Generate a pool of questions. Expects a questionsPool object and an amount of questions that should be
// generated. Depending on the amount an array of unique question ids is generated. Then the pool object
// will be filled with questions from the database. In the end this question pool is being returned to the
// calling scope with in a callback.
questionPool.getPool = function (questionPool, amount, callback) {
  createUniqueNumbers(testIndexes)
  async.mapValues(testIndexes,
    function (file, key, callback) {
      database.getQuestionById(file, function (error, question) {
        if(error) callback(error, null)
        callback(null, question)
      })
    },
    function (error, results) {
      if(error) callback(error, null)
      callback(null, results)
  })
}

// Expects an array either empty or prefilled. Depending on the amount of allocated indexes
// the array will be filled with unique Integers until the maximum amount is reached.
// TODO: This is a recursive function which might lead to performance issues depending on
// the size of the question pool.
function createUniqueNumbers(testIndexes) {
  let randomNumber = getRandomIndex(100, 113)
  for(i = testIndexes.length; i < maxAmountOfQuestions; i++) {
    if (testIndexes.indexOf(randomNumber) == -1) {
      testIndexes[i] = randomNumber
    } else {
      createUniqueNumbers(testIndexes)
    }
  }
}

// Expects two Integers as input. The first one defines the lower boundry and will be included.
// The second one is the upper boundry and will also be included.
function getRandomIndex(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

util.inherits(questionPool, events.EventEmitter)
module.exports = questionPool

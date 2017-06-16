const database = require('./database.js')
const util = require('util')
const events = require('events')

// The prototype for a question. Question objects can be instanciated with the 'new' key word.
function question() {
  this.question_id = 0
  this.category = ''
  this.question = ''
  this.answers = []
  this.solution = 0
  this.weight = 0.0
}

// Expects a question object and a 'question_id'. Then returns either a error message or a question
// object from the database. Question_ids are unique to each question.
question.getQuestionByIndex = function (questionObject, question_id, callback) {
  database.getQuestionById(question_id, function (error, question) {
    if(error) callback(error, null)
    callback(null, question)
  })
}

util.inherits(question, events.EventEmitter)
module.exports = question

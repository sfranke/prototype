const database = require('./database.js')
const util = require('util')
const events = require('events')

function question() {
  this.category = ''
  this.question = ''
  this.answers = []
  this.solution = 0
}

question.getQuestionByIndex = function (questionObject, index, callback) {
  // let ques = new question()
  database.getQuestionById(index, function (error, question) {
    if(error) callback(error, null)
    // console.log('Question after getQuestionById: ' + util.inspect(question))
    callback(null, question)
  })
}

util.inherits(question, events.EventEmitter)
module.exports = question

const assert = require('assert')
const util = require('util')
const database = require('../routes/database.js')

describe('Testing database..', function() {

  let adminUser = {
    'name': 'Admin',
    'email': 'admin@localhost.com',
    'password': null,
    'gender': null,
    'permission': 'admin'
  }
  let mochaTestUser = {
    'name': 'Test',
    'email': 'test@localhost.com',
    'password': null,
    'gender': null,
    'permission': 'admin'
  }
  let testUser = {}

  describe('generateHashedPassword', function() {
    it('should be able to hash a password.', function(done) {
      generateHashedPassword()
      done()
    })
  })

  describe('saveUser()', function() {
    it('should be able to save a new user.')
    it('should not be able to save the same user twice.')
    it('should throw an error if a certain user already exists.')
  })

  describe('getUser()', function() {
    it('should get an user by its email.', function(done) {
      database.getUser(adminUser, function(error, response) {
        testUser = response
        done()
      })
    })

    it('should have an _id object.', function(done) {
      assert.equal('object', typeof(testUser._id))
      assert.notEqual('undefined', testUser._id)
      done()
    })

    it('should have a name.', function(done) {
      assert.equal('string', typeof(testUser.name))
      assert.notEqual('undefined', testUser.name)
      done()
    })

    it('should have an email.', function(done) {
      assert.equal('string', typeof(testUser.email))
      assert.notEqual('undefined', testUser.email)
      done()
    })

    it('should have a password.')

    it('should have a gender.', function(done) {
      assert.notEqual('undefined', testUser.gender)
      done()
    })
  })
})

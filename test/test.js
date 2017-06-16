const assert = require('assert')
const util = require('util')
const database = require('../routes/database.js')
const hash = require('../routes/hash.js')

let mochaTestUser = {
  'name': 'Test',
  'email': 'test@localhost.com',
  'password': 'test',
  'gender': 'Herr',
  'permission': 'user'
}

let testUser = {}

describe('Testing global functions.', function() {

  describe('The system ', function() {
    it('should be able to encrypt a password.', function(done) {
      hash.generateHashedPassword(mochaTestUser.password, function(error, password) {
        assert.equal(null, error)
        assert.equal('string', typeof(password))
        done()
      })
    })
  })

})

describe('Testing user related functionality.', function() {

  describe('The system ', function() {

    it('should be able to save a new user.', function(done) {
      database.saveUser(mochaTestUser, function (error, user) {
        assert.equal(null, error)
        assert.notEqual('undefined', user)
        assert.equal('object', typeof(user))
        done()
      })
    })

    it('should not be able to save the same user twice.', function (done) {
      database.saveUser(mochaTestUser, function (error, user) {
        assert.notEqual('null', error)
        assert.equal('Email already in use.', error.error)
        assert.equal(null, user)
        done()
      })
    })

    it('should get an user by its email.', function(done) {
      database.getUser(mochaTestUser, function(error, user) {
        testUser = user
        assert.equal(null, error)
        assert.notEqual('undefined', user)
        assert.equal('object', typeof(user))
        done()
      })
    })

    it('should have an _id object.', function(done) {
      assert.equal('object', typeof(testUser._id))
      assert.notEqual(null, testUser._id)
      done()
    })

    it('should have a name.', function(done) {
      assert.equal('string', typeof(testUser.name))
      assert.notEqual(null, testUser.name)
      done()
    })

    it('should have an email.', function(done) {
      assert.equal('string', typeof(testUser.email))
      assert.notEqual(null, testUser.email)
      done()
    })

    it('should have a password.', function(done) {
      assert.equal('string', typeof(testUser.password))
      assert.notEqual(null, testUser.password)
      done()
    })

    it('should have a gender.', function(done) {
      assert.equal('string', typeof(testUser.gender))
      assert.notEqual(null, testUser.gender)
      done()
    })

    it('should be able to change the permission to \'admin\'', function(done) {
      var permission = 'admin'
      database.updateUserPermission(testUser, permission, function(error, doc) {
        database.getUser(doc, function(error, user) {
          assert.equal(null, error)
          assert.equal('admin', user.permission)
          done()
        })
      })
    })

    it('should be able to delete a user.', function(done) {
      database.deleteUser(testUser._id, function(error, document) {
        assert.equal(null, error)
        assert.equal('object', typeof(document))
        assert.equal(1, document.result.ok)
        assert.equal(1, document.deletedCount)
        done()
      })
    })

  })

})

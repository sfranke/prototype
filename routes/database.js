const database = exports
const mongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const util = require('util')
const uri = 'mongodb://localhost:27017/iTest'

// Expects a user object as argument. Permissions are optional and
// default to 'user' if not set explicitly.
database.saveUser = function (user, callback) {
  // console.log(util.inspect(user));
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during saveUser.')
    var collection = db.collection('users')
    collection.find({'email': user.email}).limit(1).next(function (error, doc) {
      if (error) callback(err, null)
      if (doc === null) {
        collection.update({'email': user.email}, {
          'name': user.name,
          'password': user.password,
          'permission': user.permission || 'user',
          'email': user.email,
          'gender': user.gender || null},
          {upsert: true},
          function (error, doc) {
            if (error) callback(err, null)
            collection.find({'email': user.email}).limit(1).next(function (error, user) {
              if (error) callback(err, null)
              callback(null, user)
              db.close()
            })
          })
      } else {
        callback({'error': 'Email already in use.'}, null)
        db.close()
      }
    })
  })
}

// Expects a unique id to Delete a single user by its unique ID. Then returns either the user object that
// got deleted or a error message if it failed.
database.deleteUser = function (userId, callback) {
  var id = ObjectID(userId)
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during deleteUser.')
    var collection = db.collection('users')
    collection.deleteOne({'_id': id}, function (error, doc) {
      // console.log('findOneAndDelete error:', error);
      // console.log('findOneAndDelete doc:', doc);
      if (error === null) {
        callback(null, doc)
        db.close()
      } else {
        callback({'error': 'Error while deleting user.'}, null)
        db.close()
      }
    })
  })
}

// Expects a user object and a permissions string that this user's permissions should be changed to.
// Returns either the changed user object or a error message in the callback to the calling scope.
database.updateUserPermission = function (user, permission, callback) {
  console.log('UpdateUserPermission database: ' + util.inspect(user) + ' --> ' + permission)
  var _id = ObjectID(user._id)
  var permission = permission
  console.log('TEST PERMISSION: ' + permission)
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during updateUser.')
    var collection = db.collection('users')
    collection.find({'_id': _id}).limit(1).next(function (err, doc) {
      if (err) console.log('Error fetching user during updateUser.')
      console.log('Found DOC: ' + util.inspect(doc))
      if (doc !== null) {
        collection.update(
          {
            '_id': doc._id
          },
          {
            'name': doc.name,
            'password': doc.password,
            'permission': permission,
            'email': doc.email,
            'gender': doc.gender
          },
          {
            upsert: true
          })
        callback(null, user)
        db.close()
      } else {
        callback({error: 'Some random error during updateUser -> collection updateUser.'}, null)
        db.close()
      }
    })
  })
}

// Expects an user object. Retruns either a error message or the user object from the database.
database.getUser = function (user, callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during getUser.')
    var collection = db.collection('users')
    collection.find({'email': user.email}).limit(1).next(function (error, doc) {
      if (error) callback(err, null)
      if (doc != null) {
        callback(null, doc)
        db.close()
      } else {
        callback({'error': 'User not found'}, null)
        db.close()
      }
    })
  })
}

// Returns either a error message or a list of users from the database.
database.getAllUsers = function (callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during getAllUsers.')
    var collection = db.collection('users')
    collection.find({}).toArray(function (error, users) {
      if (error) callback(err, null)
      if (users != null) {
        callback(null, users)
        db.close()
      } else {
        callback({'error': 'No users found'}, null)
        db.close()
      }
    })
  })
}

// Expects a 'question_id' and returns either a error message or a question object from the database.
database.getQuestionById = function (question_id, callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during getQuestionById.')
    var collection = db.collection('questions')
    collection.find({'question_id': question_id}).limit(1).next(function (error, doc) {
      if (error) console.log('Error during getQuestionById.' + err)
      if (doc != null) {
        callback(null, doc)
        db.close()
      } else {
        callback({'error': 'Question not found.'}, null)
        db.close()
      }
    })
  })
}

// Returns either a error message or an Integer of stored questions within the database.
database.getQuestionCount = function (callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While counting questions.')
    var collection = db.collection('questions')
    collection.count(function (error, result) {
      if (error) callback(error, null)
      if (result != null) {
        callback(null, result)
        db.close()
      } else {
        callback({'error': 'No questions found.'}, null)
        db.close()
      }
    })
  })
}

database.getLowestId = function (callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While retrieving lowest document Id.')
    let collection = db.collection('questions')
    collection.find().sort({_id: 1}).limit(1).next(function(err, doc) {
      if (err) console.log('Error while retrieving highest document Id.' + err)
      if (doc != null) {
        callback(null, doc)
        db.close()
      } else {
        callback({'error': 'Question not found.'}, null)
        db.close()
      }
    })
  })
}

database.getHighestId = function (callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While retrieving highest document Id.')
    let collection = db.collection('questions')
    collection.find().sort({_id: -1}).limit(1).next(function(err, doc) {
      if (err) console.log('Error while retrieving highest document Id.' + err)
      if (doc != null) {
        callback(null, doc)
        db.close()
      } else {
        callback({'error': 'Question not found.'}, null)
        db.close()
      }
    })
  })
}

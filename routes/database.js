const database = exports
const mongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const util = require('util')
const uri = 'mongodb://localhost:27017/iTest'

// Expects a user object as argument. Permissions are optional and
// default to 'user' if not set explicitly.
database.saveUser = function (user, callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during saveUser.')
    let collection = db.collection('users')
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
  let id = ObjectID(userId)
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during deleteUser.')
    let collection = db.collection('users')
    collection.deleteOne({'_id': id}, function (error, doc) {
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
// Returns either the unchanged user object or a error message in the callback to the calling scope.
// TODO: Consider returning the changed object.
database.updateUserPermission = function (user, permission, callback) {
  let _id = ObjectID(user._id)
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during updateUser.')
    let collection = db.collection('users')
    collection.find({'_id': _id}).limit(1).next(function (err, doc) {
      if (err) console.log('Error fetching user during updateUser.')
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
        callback(null, doc)
        db.close()
      } else {
        callback({error: 'Some random error during updateUser -> collection updateUser.'}, null)
        db.close()
      }
    })
  })
}

// Expects an user object. Returns either a error message or the user object from the database.
database.getUser = function (user, callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While connecting to DB during getUser.')
    let collection = db.collection('users')
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
    let collection = db.collection('users')
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
    let collection = db.collection('questions')
    collection.find({'question_id': question_id}).limit(1).next(function (error, doc) {
      if (error) console.log('Error during getQuestionById.' + err)
      if (doc != null) {
        callback(null, doc)
        db.close()
      } else {
        callback({'error': 'Question not found (getQuestionById).'}, null)
        db.close()
      }
    })
  })
}

// Returns either a error message or an Integer of stored questions within the database.
database.getQuestionCount = function (callback) {
  mongoClient.connect(uri, function (err, db) {
    if (err) console.log('error', 'While counting questions.')
    let collection = db.collection('questions')
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

// Returns the lowest 'question_id' found in the 'questions' collection.
// This is used during the generation of a 'questionPool' to ensure only
// valid questions get inserted into the 'questionPool' object.
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
        callback({'error': 'Question not found (getLowestId).'}, null)
        db.close()
      }
    })
  })
}

// Returns the highest 'question_id' found in the 'questions' collection.
// This is used during the generation of a 'questionPool' to ensure only
// valid questions get inserted into the 'questionPool' object.
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
        callback({'error': 'Question not found (getHighestId).'}, null)
        db.close()
      }
    })
  })
}

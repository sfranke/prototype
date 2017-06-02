const express = require('express')
const router = express.Router()
const database = require('./database')
const bcrypt = require('bcrypt')

// GET '/register'. This is the default route for users that are about to register.
// Check if registration is enabled. If so, render route else redirect to landingpage.
router.get('/', function (req, res, next) {
  // Checking global 'registerState'. This state's default value is false (check 'app.js').
  // If an admin enables registration it is enabled globally.
  if (req.app.locals.registerState === false) {
    res.redirect('/')
  } else {
    if (!req.session.user) {
      // Render page only if registration is enabled and only for users without a active session.
      res.render('register', {title: 'Register', session: req.session, message: req.flash('signupMessage')})
    } else {
      res.redirect('/')
    }
  }
})

// POST '/register'. This route expects user data from the registration form. If not all the fields a filled
// in this action will fail. Frontend informs the user in case of deficiencies.
router.post('/', function (req, res, next) {
  // TODO: Validate incoming data before processing to avoid injection attacks.
  // Also check for type, and cast to string if necessary.
  if (req.body.email !== '' && req.body.name !== '' && req.body.password !== '') {
    // Creating a new user without instantiating an object of some user class.
    let user = {
      'name': req.body.name,
      'email': req.body.email,
      'password': req.body.password,
      'gender': req.body.gender
    }
    // Hash password before saving it to the database.
    generateHashedPassword(req.body.password, function (error, password) {
      if (error) console.log('error', 'Error while saving user.')
      user.password = password
      // Save user data to database. This process could potentially fail if the email provided
      // already exists in the database. User data is uniquely identified by the email address.
      database.saveUser(user, function (error, user) {
        if (error) console.log('error', 'Error while saving user.')
        if (user != null) {
          req.session.user = user
          // Start the test by redirecting to '/test' route.
          res.redirect('/test')
          // If saving of user data fails. It fails because the email provided is already taken.
          // Provide feedback to the user and let them try again. Respond with '422 - Unprocessable Entity'
          // because '400 - Bad Request' would not be specific enough.
        } else {
          return res.redirect('/register', 422, {message: req.flash('signupMessage', 'That email is already taken')})
        }
      })
    })
  }
})

// API used to enable/disable registration. Is disabled by default and has
// to be enabled by and admin. Communication for the navbar is tunneled through
// a websocket connection (socket-io).
router.post('/toggle', function (req, res, next) {
  if (!req.session.user) {
    // If user is not logged in yet respond with '401 - Unauthorized'.
    return res.status(401).send({error: 'Unauthorized', response: null})
  }
  // Only display the button to an admin. Also make sure the correct button is displayed.
  // There a re two events to handle the state of the button on the client-side. This process
  // is maintained on the backend because the global stat for the registration is also maintained
  // by the server.
  if (req.session.user.permission === 'admin') {
    if (req.app.locals.registerState === false) {
      req.app.locals.registerState = true
      io.emit('register-show')
    } else {
      req.app.locals.registerState = false
      io.emit('register-hide')
    }
    // If all criteria are met to change the state send a success message '200 - OK'.
    return res.status(200).send({error: null, response: 'success'})
  } else {
    // If the request is coming from a non admin session respond appropriately.
    // '403 - Forbidden'. The request was valid, but the server is refusing action.
    // The user might not have the necessary permissions for a resource.
    return res.status(403).send({error: 'Forbidden', response: null})
  }
})

// Expects the password itself and generates a hashed password. The hased password is then
// returned in a callback to its initial caller. The method used is a synchronous bcrypt
// method using a custom salt to increase entry barrier for decryption.
function generateHashedPassword (password, callback) {
  let hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(9))
  callback(null, hashedPassword)
};

module.exports = router

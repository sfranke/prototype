const hash = exports
var bcrypt = require('bcrypt')

// Expects the password itself and generates a hashed password. The hased password is then
// returned in a callback to its initial caller. The method used is a synchronous bcrypt
// method using a custom salt to increase entry barrier for decryption.
hash.generateHashedPassword = function (password, callback) {
  var hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(9))
  // console.log('Hashed password:', hashedPassword)
  callback(null, hashedPassword)
};

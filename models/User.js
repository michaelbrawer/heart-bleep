var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const demoTrack = require('./demo');
const nullTrack = require('./nulls');

// import {nullTrack, demoTrack} from '../src/components/assets/js/patterns'

var userSchema = new mongoose.Schema({
  name: String,
  pattern: {type: Array, default: nullTrack},
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  // this will be set to the current document
  var user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};




module.exports = mongoose.model('User', userSchema);
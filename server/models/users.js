const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bloguser = new Schema({
  username: {
    type: String,
    trim: 'true username already existttt' // removes whitespace accidentally
  },
  password: {
    type: String
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', bloguser);
module.exports = User

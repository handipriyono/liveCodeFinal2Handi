var express = require('express');
var router = express.Router();

let {
  Register,
  Login
} = require('../controllers/users')

router
  .post('/register', Register)
  .post('/login', Login)




module.exports = router;

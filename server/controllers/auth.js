var jwt = require('jsonwebtoken');

module.exports = {
  authUser: function (req, res, next) {
    console.log('masuk middle ya')
    let token = req.headers.tokenblog
    console.log('masuk middle :', token)
    try {
      let decoded = jwt.verify(token, 'kabbalah')
      if (decoded) {
        next()
      } else {
        res.json('err auth')
      }
    } catch (err) {
      // err
      console.log(err)
    }


  }

}

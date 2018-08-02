let user = require('../models/users')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

module.exports = {
  Register: function (req, res) {
    let hash = bcrypt.hashSync(req.body.password, 7);
    user.create({
        username: req.body.username,
        password: hash
      })
      .then(function (dataUser) {
        var token = jwt.sign({
          data: dataUser.email,
          nama: dataUser.username,
          id: dataUser._id
        }, 'kabbalah');
        res.json({
          dataUser,
          token: token
        })
        console.log('ini daftar user registered:', dataUser, token)
      })
      .catch(function (err) {
        res.json(err)
        console.log(err)
      })
  },


  Login: function (req, res) {
    user.findOne({
        email: req.body.email
      })
      .then(function (resultUser) {
        if (resultUser) {
          console.log(resultUser)
          let cek = bcrypt.compareSync(req.body.password, resultUser.password)
          if (cek) {
            var token = jwt.sign({
              data: resultUser.email,
              id: resultUser._id,
              nama: resultUser.username
            }, 'kabbalah');

            console.log(resultUser, 'login')
            res.json({
              resultUser,
              token: token
            })
          } else {
            console.log('err')
            res.json('password/ username salah')
          }

        } else {
          res.json('pass/username salah')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },

  //cek nama / print nama yg login
  WhoYouAre: function (req, res) {
    let token = req.headers.tokenblog
    console.log(token, '-----')
    jwt.verify(token, 'kabbalah', function (err, decode) {
      if (err) {
        console.log(err)
        res.json(err)
      } else {
        res.json(decode)
      }
    })
  }



}

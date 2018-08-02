let Blog = require('../models/articles')
var jwt = require('jsonwebtoken');

module.exports = {

  postwithAuthor: function (req, res) {

    Blog.find({
        author: req.params.id
      })
      .populate('author')
      .exec(function (err, data) {
        console.log(err)
        if (err) return handleError(err);
        console.log(data)

        res.json(data)
      })
  },




  addArticle: function (req, res) {
    let decoded = jwt.verify(req.headers.tokenblog, 'kabbalah')
    console.log(decoded)
    Blog.create({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: decoded.id
      })
      .then(function (dataPost) {
        console.log(dataPost)
        res.json(dataPost)
      })
      .catch(function (err) {
        res.json(err)
        console.log(err)
      })

  },

  deletePost: function (req, res) {
    Blog.findByIdAndRemove(req.params.id)
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
      .catch(function (err) {
        console.log(err)
      })
  },

  showPost: function (req, res) {
    Blog.find({})
      .sort({
        createdAt: -1
      })
      .then(function (dataBlog) {
        console.log(dataBlog)
        res.json(dataBlog)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },


  //find by id
  singleArticle: function (req, res) {
    Blog.findById(req.params.id)
      .then(function (data) {
        console.log(data)
        res.json(data)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })

  },


  findbyCat: function (req, res) {
    Blog.find({
        category: req.body.category
      })
      .then(function (datacat) {
        console.log(datacat)
        res.json(datacat)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },


  findbyAuthor: function (req, res) {
    Blog.find({
        author: req.query.author
      })
      .then(function (dataAuthor) {
        console.log(dataAuthor)
        res.json(dataAuthor)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },


  updateArticle: function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, {
        content: req.body.content,
        title: req.body.title,
        category: req.body.category
      })
      .then(function (dataUpdate) {
        console.log(dataUpdate)
        res.json(dataUpdate)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  }



}

var express = require('express');
var router = express.Router();
let {
  authUser
} = require('../controllers/auth')

let {
  addArticle,
  deletePost,
  showPost,
  singleArticle,
  findbyCat,
  findbyAuthor,
  updateArticle,
  postwithAuthor
} = require('../controllers/articles')


router
  .post('/article/add', addArticle)
  .get('/article', authUser, showPost)
  .get('/article/:id', singleArticle)
  .delete('/article/delete/:id', deletePost)
  .put('/article/update/:id', updateArticle)
  .get('/article/category', findbyCat)
  .get('/article/author/search', findbyAuthor)
  .get('/article/authors/:id', postwithAuthor)

// router.get('/article/category', findbyCat)


module.exports = router;

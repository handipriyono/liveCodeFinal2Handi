const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Blogarticle = new Schema({
  title: {
    type: String
  },
  content: {
    type: String,
  },
  category: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});


const Article = mongoose.model('Article', Blogarticle);
module.exports = Article

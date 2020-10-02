const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  claimed: { type: Schema.Types.ObjectId, ref: 'User' },
  body: String,
  type: String,
  image: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
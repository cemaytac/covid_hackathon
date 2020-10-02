const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  claimed: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  title: String,
  body: String,
  image: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
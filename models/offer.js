const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new mongoose.Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  userresponse: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  title: String,
  body: String,
  image: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Offer', offerSchema);
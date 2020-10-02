const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new mongoose.Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Offer', offerSchema);
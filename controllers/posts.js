const Post = require('../models/post')

module.exports = {
  index,
  create
}

function create(req, res) {
  req.body.user = req.user._id
  console.log(req.body.user)
  Post.create(req.body)
    .then(post => { res.json(post) })
    .catch(err => { res.json(err) })
}

function index(req, res) {
  Post.find({})
    .then(posts => { res.json(posts) })
    .catch(err => { res.json(err) })
}
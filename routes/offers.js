const router = require('express').Router();
const offersCtrl = require('../controllers/offers')

// Public Routes
router.get('/', offersCtrl.index);

// Protected Routes
router.use(require('../config/auth'));

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
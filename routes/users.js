var express = require('express');
var router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', async(req, res, next) => {
  const users = await User.find();
  return res.status(200).json(users);
});

module.exports = router;
var express = require('express');
var router = express.Router();
const chainid = require('../models/chainid')

/* GET users listing. */
router.get('/', async(req, res, next) => {
  const chainids = await chainid.find();
  return res.status(200).json(chainids);
});

module.exports = router;

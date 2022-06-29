var express = require('express');
var router = express.Router();
const Pair = require('../models/pair')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const pair = await Pair.find();
  return res.status(200).json(pair);
});

router.get('/params/:token1', async (req, res, next) => {
  const result = await Pair.find({
    token1: req.params.token1,
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

router.get('/reverse/:token1/:token2', async (req, res, next) => {
  const result = await Pair.find({
    token1: req.params.token1,
    token2: req.params.token2
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

module.exports = router;
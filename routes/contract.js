var express = require('express');
var router = express.Router();
const Contract = require('../models/contract')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const contract = await Contract.find();
  return res.status(200).json(contract);
});

router.get('/params/:chainid', async (req, res, next) => {
  const result = await Contract.find({
    chainid: req.params.chainid,
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

module.exports = router;
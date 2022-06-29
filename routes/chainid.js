var express = require('express');
var router = express.Router();
const chainid = require('../models/chainid')

/* GET users listing. */
router.get('/', async(req, res, next) => {
  const chainids = await chainid.find();
  return res.status(200).json(chainids);
});

router.get('/params/chainid/:chainid', async (req, res, next) => {
  const result = await chainid.findOne({
    chainid: req.params.chainid
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

module.exports = router;

var express = require('express');
var router = express.Router();
const Token = require('../models/token')


// router.post('/'), async(req, res, next) => {
//     const tokens = await req.body;
//     return res.status(200).json(tokens);
// }

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const tokens = await Token.find();
  return res.status(200).json(tokens);
});

router.get('/params/:address', async (req, res, next) => {
  const result = await Token.findOne({
    address: req.params.address
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

router.get('/paramss/:chainid', async (req, res, next) => {
  const result = await Token.find({
    chainid: req.params.chainid
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

router.get('/params/token/:token', async (req, res, next) => {
  console.log('sad', req.params.token)
  const result = await Token.find({
    token: req.params.token
  })
  return (result) ? res.status(200).json(result) : res.status(200).json({ message: "Not found" });
})

module.exports = router;
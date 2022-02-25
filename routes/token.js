var express = require('express');
var router = express.Router();
const Token = require('../models/token')

/* GET users listing. */
router.post('/'), async(req, res, next) => {
    const tokens = await req.body;
    return res.status(200).json(tokens);
}

router.get('/', async(req, res, next) => {
  const tokens = await Token.find();
  return res.status(200).json(tokens);
});
router.get('/params/:address', async(req, res, next) => {
  const result = await Token.findOne({
      address: req.params.address
  })
  return (result)? res.status(200).json(result) : res.status(200).json({message: "Not found"});
})

module.exports = router;
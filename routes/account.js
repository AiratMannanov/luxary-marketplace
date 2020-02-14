const express = require('express');
const router = express.Router();
const passport = require('passport')
const Goods = require('../models/goods-schema');

router.get('/', (req, res) => {
  const { user } = req;

  res.render('account')
})

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport')
const Goods = require('../models/goods-schema')

router.get('/new', (req, res) => {
  res.render('new-item');
});

//add new item 
router.post('/new', async (req, res) => {
  const { sex, brand, description, image, size, category, price, title } = req.body;
  const { user } = req;
  const userID = user._id;
  
  const newItem = new Goods({
    sex,
    brand,
    description,
    image,
    size,
    category,
    price,
    title,
    userID
  });
  await newItem.save();  
  res.redirect('/')
})


module.exports = router;

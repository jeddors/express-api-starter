const express = require('express');

const emojis = require('./emojis');
const users = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "You've reached the base API route, hello!",
    timestamp: new Date().getUTCMilliseconds()
  });
});

router.use('/emojis', emojis);
router.use('/users', users);

module.exports = router;

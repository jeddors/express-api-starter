const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
      message: "you've reached the base URL for the /users route!",
      timestamp: new Date().getUTCMilliseconds();
  });
});

module.exports = router;

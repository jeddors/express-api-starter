const express = require('express');
const auth = require('../middlewares/auth');
const checkObjectId = require('../middlewares/checkObjectId');

const router = express.Router();

const User = require('../models/User');

// @route    GET api/users
// @desc     route status
// @access   Public
router.get('/', (req, res) => {
  res.json({
      message: "you've reached the base URL for the /users route!",
      timestamp: new Date().getUTCMilliseconds();
  });
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
// router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
  
//       if (!post) {
//         return res.status(404).json({ msg: 'Post not found' });
//       }
  
//       res.json(post);
//     } catch (err) {
//       console.error(err.message);
  
//       res.status(500).send('Server Error');
//     }
//   });

module.exports = router;

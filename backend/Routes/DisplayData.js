const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    
    res.send([global.food_items,global.foodCategory]);
  } catch (error) {
    res.send("invalid");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/items");

// @route   GET api/items
// @desc    Get All Items
// @access pullic
router.get("/", (req, res) => {
  Item.find()
    .sort({ data: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create a Post
// @access pullic

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete a Item
// @access pullic

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

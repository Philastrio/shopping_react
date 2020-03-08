const express = require("express");
const router = express.Router();

// Item model
const User = require("../../models/users");

// @route   POST api/users
// @desc    Register new user
// @access pullic
router.post("/", (req, res) => {
  res.send("register");
});

module.exports = router;

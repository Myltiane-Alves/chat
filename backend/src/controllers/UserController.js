const bcrypt = require("bcrypt");

const User = require("../models/User");
const { get } = require("mongoose");

module.exports = {
  async store(req, res) {
    const { username, document, password } = req.body;

    let user = await User.findOne({ username });
    if (user)
      return res.status(400).json({ message: "User already registered" });

    user = new User({ username, password, document });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    return res.json(user);
  },

  async get(req, res) {
    const users = await User.find();
    return res.json(users);
  
  }
};

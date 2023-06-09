const User = require("../models/User");
const fs = require("fs");

const signupController = async (req, res, next) => {
  console.log("signupController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email & password is required");
    return;
  }

  // const id = Math.floor(Math.random() * 1000);

  // const user = User.findOne({ email });
  // console.log(user);

  // if (user) {
  //   res.status(403).send("Email already Registered");
  //   return;
  // }

  const newUser = new User({ email, password });
  await newUser.save();

  res.status(200).json(newUser);
};

const loginController = async (req, res) => {
  console.log("loginController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email & password is required");
    return;
  }

  // const user = users.find((items) => items.email === email);

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).send("User Not Found");
    return;
  }
  if (user.password !== password) {
    res.status(401).send("Incorrect Password");
    return;
  }
  res.status(200).json({
    email: user.email,
  });
};

const getUserController = (req, res) => {
  const id = req.params.id * 1;
  console.log(typeof id);
  if (!id) {
    res.status(404).send("User ID is not found");
    return;
  }

  const user = users.find((items) => items.id === id);
  res.status(200).send(user);
  console.log(id, user);
};

module.exports = {
  loginController,
  signupController,
  getUserController,
};

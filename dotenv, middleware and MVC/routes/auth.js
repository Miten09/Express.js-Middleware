const router = require("express").Router();

router.post("/login", (req, res) => {
  res.send("this id for login");
});

router.post("/signup", (req, res) => {
  res.send("this id for signup");
});

module.exports = router;

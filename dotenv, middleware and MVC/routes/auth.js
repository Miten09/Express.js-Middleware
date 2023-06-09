const {
  loginController,
  signupController,
  getUserController,
} = require("../controllers/auth");
const log = require("../midlewares/Logger");

const router = require("express").Router();

router.post("/login", loginController);
router.post("/signup", signupController);
router.get("/user/:id", getUserController);

module.exports = router;

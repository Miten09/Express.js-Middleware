const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    id: "2323",
    title: "hello",
    imgurl: "lastswsa",
  });
});

router.get("/all", (req, res) => {
  res.json({
    data: [
      {
        title: "hello",
      },
      {
        data: "hi",
      },
    ],
  });
});

module.exports = router;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
  res.send("Hello User");
});

// console.log(__dirname);

app.get("/", (req, res) => {
  //   res.json({
  //     name: "miten",
  //   });
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.json({
    name: req.body.name,
  });
});

app.listen(8000, () => {
  console.log("server start");
});

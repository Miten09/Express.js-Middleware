const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mainRouter = require("./routes/index");

const app = express();
app.use(express.json());
const dbConnect = require("./dbConnect");

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   if (req.body.name === "miten") {
//     next();
//   } else {
//     res.send("not allowed");
//   }
//   // next();
// });

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
  console.log("started listening on port", PORT);
});

const mongoose = require("mongoose");

module.exports = () => {
  const mongoUri =
    "mongodb+srv://Miten:@projects.hpzcfyg.mongodb.net/?retryWrites=true&w=majority";

  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    });
};

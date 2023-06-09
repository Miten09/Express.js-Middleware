// const users = [
//   {
//     id: "134",
//     email: "miten@gmail.com",
//     password: "32312",
//   },
//   {
//     id: "762",
//     email: "hari@gmail.com",
//     password: "3232",
//   },
// ];

// module.exports = users;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    marks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

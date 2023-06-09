const mongoose = require("mongoose");
const User = require("./models/User");

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

async function create(newUser) {
  const user = new User(newUser); // In Memory Store Thase

  const data = await user.save(); // Database Mongo ma store thase
  //   console.log("user", user);
  //   console.log("data", data);
}

async function findUser() {
  //   const user = await User.find();
  //   const user = await User.findById("64830d34501d6bd2d701f6a5");
  //   const user = await User.find({email});
  //   const user = await User.find({ marks: { $gt: 49 } });
  const user = await User.find({ email: { $regex: "u" } });
  console.log(user);
  return user;
}

async function updateMarks(userId, marks) {
  const user = await User.findById(userId);
  user.marks = marks;
  const updatedUser = await user.save();
  console.log(updatedUser);
}

updateMarks("64831778bfef4b5439683871", 56);

async function deleteUser(userId) {
  const user = await User.findById(userId);
  console.log(user);
  user.deleteOne();
}

deleteUser("64832321e428b30d0558a29d");

// create({
//   email: "shivam@gmail.com",
//   password: "12345",
//   marks: 49,
// });

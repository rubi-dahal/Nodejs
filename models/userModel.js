const mongo = require("mongoose");
const schema = mongo.Schema;

const userSchema = new schema({
  name: String,
  email: String,
  password: String,
});

const User = mongo.model("User", userSchema);

module.exports = User;


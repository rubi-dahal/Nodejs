const mongodb = require("mongoose");

async function connect() {
  await mongodb.connect(process.env.CONNECTION_STRING);
  console.log("DB connected succcesfully!!");
}

module.exports = connect;

const mongodb = require("mongoose");

async function connect() {
  await mongodb.connect(
    "mongodb+srv://nodejstraining:nodejstraining@cluster0.xkyoca6.mongodb.net/?appName=Cluster0"
  );
  console.log("DB connected succcesfully!!");
}

module.exports = connect;


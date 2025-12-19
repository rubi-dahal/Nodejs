const mongo = require("mongoose");
const schema = mongo.Schema;

const blogSchema = new schema({
  title: String,
  subtitle: String,
  description: String,
});

const Blog = mongo.model("Blog", blogSchema);

module.exports = Blog;


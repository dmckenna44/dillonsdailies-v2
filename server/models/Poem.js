const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: Array,
  date: String,
});

const Poem = mongoose.model("poem", poemSchema);

module.exports = Poem;
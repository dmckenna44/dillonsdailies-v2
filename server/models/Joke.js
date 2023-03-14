const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
  date: String,
});

const Joke = mongoose.model("joke", jokeSchema);

module.exports = Joke;
const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema({
  video: String,
  date: String,
});

const Highlight = mongoose.model("highlight", highlightSchema);

module.exports = Highlight;
const mongoose = require('mongoose');

const sayingSchema = new mongoose.Schema({
  name: String,
  quote: String,
  date: String,
});

const Saying = mongoose.model("saying", sayingSchema);

module.exports = Saying;
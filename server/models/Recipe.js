const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  dishName: String,
  time: Number,
  servings: Number,
  ingredients: Array,
  instructions: String,
  source: String,
  imageURL: String,
  date: String,
});

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;
const Poem = require('../models/Poem');
const Joke = require('../models/Joke');
const Recipe = require('../models/Recipe');
const Highlight = require('../models/Highlight');
const Saying = require('../models/Saying');

const getDate = function () {
  const today = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  };
  return today.toLocaleDateString("en-US", options);
};

const dataController = {};

dataController.getPoem = async (req, res, next) => {
  const {date} = req.body;
  try {
    const foundPoem = await Poem.findOne({date: getDate()});
    console.log('found poem', foundPoem);
    res.locals.foundData = foundPoem;
    return next();
  } catch (err) {
    return next(err)
  }
}
dataController.getJoke = async (req, res, next) => {
  const {date} = req.body;
  try {
    const foundJoke = await Joke.findOne({date: getDate()});
    console.log('found poem', foundJoke);
    res.locals.foundData = foundJoke;
    return next();
  } catch (err) {
    return next(err)
  }
}

dataController.getHighlight = async (req, res, next) => {
  const {date} = req.body;
  try {
    const foundHighlight = await Highlight.findOne({date: getDate()});
    console.log('found poem', foundHighlight);
    res.locals.foundData = foundHighlight;
    return next();
  } catch (err) {
    return next(err)
  }
}

dataController.getRecipe = async (req, res, next) => {
  try {
    const foundRecipe = await Recipe.findOne({date: getDate()});
    console.log('found poem', foundRecipe);
    res.locals.foundData = foundRecipe;
    return next();
  } catch (err) {
    return next(err)
  }
}

dataController.getSaying = async (req, res, next) => {
  try {
    const foundSaying = await Saying.findOne({date: getDate()});
    console.log('found poem', foundSaying);
    res.locals.foundData = foundSaying;
    return next();
  } catch (err) {
    return next(err)
  }
}


module.exports = dataController;


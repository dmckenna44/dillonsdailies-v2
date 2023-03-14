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
    res.locals.foundPoem = foundPoem;
    return next();
  } catch (err) {
    return next(err)
  }


}


module.exports = dataController;


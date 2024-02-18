const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  id: {
    type: "Number",
    required: true,
  },
  Name: {
    type: "string",
    require: true,
  },
  Author: {
    type: "string",
    required: true,
  },
  Year: {
    type: "Number",
    required: true,
  },
});

const Books = mongoose.model("books", BookSchema);
module.exports = Books;

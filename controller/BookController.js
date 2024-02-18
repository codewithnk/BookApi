const mongoose = require("mongoose");

const Books = require("../Models/BookModels");

async function dbconnection() {
  await mongoose
    .connect("mongodb://0.0.0.0:27017/Books")
    .then(() => {
      console.log("db connection established");
    })
    .catch((error) => {
      console.log("db connection error " + error.message);
    });
}

dbconnection();

const bookall = async (req, res) => {
  try {
    res.send(await Books.find({}));
  } catch (error) {
    res.send({ error: error.message });
  }
};

const booksave = async (req, res) => {
  try {
    const books = req.body;
    await Books.create(books);
    const response = await Books.find({});
    res.send({ response });
  } catch (error) {
    res.send({ error: error });
  }
};

const bookdelete = async (req, res) => {
  try {
    const id = req.params.id;
    await Books.deleteOne({ id: id });
    res.send({ error: error.message });
  } catch (error) {
    res.send({ error: error });
  }
};

const bookupdate = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await Books.updateOne({ id: id }, { $set: body });
    res.send(await Books.find({}));
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports = { bookupdate, bookall, bookdelete, booksave };

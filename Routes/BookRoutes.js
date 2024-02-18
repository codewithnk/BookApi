const express = require("express");
const {
  bookall,
  booksave,
  bookdelete,
  bookupdate,
} = require("../Controller/BookController");

const routes = express.Router();

routes.get("/fetch", bookall);
routes.post("/save", booksave);
routes.delete("/delete/:id", bookdelete);
routes.put("/update/:id", bookupdate);

module.exports = routes;

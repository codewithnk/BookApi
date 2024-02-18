const express = require("express");
const app = express();
const BookRoutes = require("./Routes/BookRoutes");

app.use(express.json());
app.use(BookRoutes);

app.listen(3000, () => {
  console.log("server in running ");
});

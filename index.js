const express = require("express");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();

const PORT = 8080;

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log("Running on Port:", PORT);
});

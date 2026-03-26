const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All Books"));

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book reserve: ${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book: ${bookId}`);
});

exports.module = bookRouter;

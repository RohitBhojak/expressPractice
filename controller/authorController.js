const db = require("db");
const NotFoundError = require("../errors/NotFoundError");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new NotFoundError("Author not found");
  }

  res.send(`Author Name: ${author}`);
}

module.exports = { getAuthorById };

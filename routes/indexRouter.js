const { Router } = require("express");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["rohit", "rahul", "abhay"];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { message: "Views with EJS", links: links, users: users }),
);

indexRouter.get("/about", (req, res) => res.send(`About`));

indexRouter.get("/contact", (req, res) => res.send(`Contact`));

indexRouter.post("/contact", (req, res) => res.send(`Post contact`));

module.exports = indexRouter;

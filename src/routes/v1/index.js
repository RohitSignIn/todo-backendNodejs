const v1Router = require("express").Router();

const todoRouter = require("./todo_router");

v1Router.use("/todo", todoRouter);

module.exports = v1Router;

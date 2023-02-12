const express = require("express");

const routes = require("./rotas/index.js");
const HandleErrorMiddleware = require("./middlewares/HandleErrorMiddleware.js");

const app = express();

routes(app);

app.use(HandleErrorMiddleware.handle);

module.exports = app;
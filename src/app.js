const express = require("express");
const path = require('path');

const routes = require("./rotas/index.js");
const HandleErrorMiddleware = require("./middlewares/HandleErrorMiddleware.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")))

routes(app);

app.use(HandleErrorMiddleware.handle);

module.exports = app;
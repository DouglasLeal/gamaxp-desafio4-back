const express = require("express");

const categoriaRota = require("./categoriaRotas.js");

const routes = (app) => {
    app.use(express.json());
    app.use("/categorias", categoriaRota);
}

module.exports = routes;
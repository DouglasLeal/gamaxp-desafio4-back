const express = require("express");

const categoriaRotas = require("./categoriaRotas.js");
const produtoRotas = require("./produtoRotas.js");

const routes = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/categorias", categoriaRotas);
    app.use("/produtos", produtoRotas);
}

module.exports = routes;
const express = require("express");

const categoriaRotas = require("./categoriaRotas.js");
const produtoRotas = require("./produtoRotas.js");
const usuarioRotas = require("./usuarioRotas.js");

const routes = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/categorias", categoriaRotas);
    app.use("/produtos", produtoRotas);
    app.use("/usuarios", usuarioRotas);
}

module.exports = routes;
const express = require("express");

const Controller = require("../controllers/CategoriaController.js");
const validation = require("../validations/categoriaValidation.js");

const router = express.Router();

router
    .get("/", Controller.listar)
    .post("/", validation, Controller.criar)
    .put("/:id", validation, Controller.atualizar)
    .delete("/:id", Controller.excluir)

module.exports = router;
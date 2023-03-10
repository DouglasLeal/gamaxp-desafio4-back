const express = require("express");

const Controller = require("../controllers/UsuarioController.js");

const router = express.Router();

router
    .get("/", Controller.listar)
    .post("/", Controller.criar)
    .put("/:id", Controller.atualizar)
    .delete("/:id", Controller.excluir)

module.exports = router;
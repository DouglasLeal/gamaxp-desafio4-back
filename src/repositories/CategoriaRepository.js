const db = require("../models");

class CategoriaRepository {
    static async listar() {
        return await db.Categoria.findAll();
    }

    static async buscarPorId(id) {
        return await db.Categoria.findByPk(id);
    }

    static async buscarPorNome(nome) {
        return await db.Categoria.findOne({ where: { nome } })
    }

    static async criar(data) {
        const categoria = await db.Categoria.create({
            nome: data.nome,
        });

        return categoria;
    }

    static async atualizar(id, data) {
        return await db.Categoria.update({
            nome: data.nome,
        }, { where: { id } });
    }

    static async excluir(id) {
        return await db.Categoria.destroy({ where: { id } });
    }
}

module.exports = CategoriaRepository;
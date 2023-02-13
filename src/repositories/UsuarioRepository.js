const db = require("../models");

class UsuarioRepository {
    static async listar() {
        return await db.Usuario.findAll();
    }

    static async buscarPorId(id) {
        return await db.Usuario.findByPk(id);
    }

    static async buscarPorEmail(email) {
        return await db.Usuario.findOne({ where: { email } })
    }

    static async criar(data) {
        const usuario = await db.Usuario.create({
            nome: data.nome,
            email: data.email,
            senha: data.senha,
        });

        return usuario;
    }

    static async atualizar(id, data) {
        return await db.Usuario.update({
            nome: data.nome,
            email: data.email,
            senha: data.senha,
        }, { where: { id } });
    }

    static async excluir(id) {
        return await db.Usuario.destroy({ where: { id } });
    }
}

module.exports = UsuarioRepository;
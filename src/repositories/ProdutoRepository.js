const db = require("../models");
const { Categoria } = require('../models');

class ProdutoRepository {
    static async listar() {
        return await db.Produto.findAll({
            include: [{ model: Categoria,
                as: 'categoria' 
            }]
          });
    }

    static async buscarPorId(id) {
        return await db.Produto.findByPk(id);
    }

    static async criar(data) {
        const produto = await db.Produto.create({
            nome: data.nome,
            foto: data.foto,
            preco: data.preco,
            descricao: data.descricao,
            categoriaId: data.categoriaId,
        });

        return produto;
    }

    static async atualizar(id, data) {
        return await db.Produto.update({
            nome: data.nome,
        }, { where: { id } });
    }

    static async excluir(id) {
        return await db.Produto.destroy({ where: { id } });
    }
}

module.exports = ProdutoRepository;
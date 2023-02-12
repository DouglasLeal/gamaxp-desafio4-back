const ProdutoRepository = require("../repositories/ProdutoRepository.js");

class ProdutoController{
    static async listar(req, res){
        try {
            let produtos = await ProdutoRepository.listar();
            return res.status(200).json(produtos);
        } catch (error) {
            console.log(error)
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async criar(req, res) {
        try {
            let novoProduto = await ProdutoRepository.criar(req.body);
            return res.status(201).json(novoProduto);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async atualizar(req, res) {
        try {
            let produtoCadastrado = await ProdutoRepository.buscarPorId(req.params.id);
            
            if(!produtoCadastrado){
                return res.status(404).json({"erro": "Id não encontrado"});
            }

            await ProdutoRepository.atualizar(req.params.id, req.body);

            let produtoAtualizado = await ProdutoRepository.buscarPorId(req.params.id);

            return res.status(200).json(produtoAtualizado);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async excluir(req, res) {
        try {
            let produtoCadastrado = await ProdutoRepository.buscarPorId(req.params.id);
            
            if(!produtoCadastrado){
                return res.status(404).json({"erro": "Id não encontrado"});
            }

            await ProdutoRepository.excluir(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }
}

module.exports = ProdutoController;
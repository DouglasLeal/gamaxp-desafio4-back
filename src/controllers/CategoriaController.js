const CategoriaRepository = require("../repositories/CategoriaRepository.js");

class CategoriaController{
    static async listar(req, res){
        try {
            let categorias = await CategoriaRepository.listar();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async criar(req, res) {
        try {

            let categoriaJaCadastrada = await CategoriaRepository.buscarPorNome(req.body.nome);

            if(categoriaJaCadastrada){
                return res.status(400).json({"erro": "Nome de categoria já cadastrado"});
            }

            let novaCategoria = await CategoriaRepository.criar(req.body);
            return res.status(201).json(novaCategoria);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async atualizar(req, res) {
        try {
            let categoriaCadastrada = await CategoriaRepository.buscarPorId(req.params.id);
            
            if(!categoriaCadastrada){
                return res.status(404).json({"erro": "Id não encontrado"});
            }

            let nomeJaCadastrado = await CategoriaRepository.buscarPorNome(req.body.nome);

            if(nomeJaCadastrado != null && categoriaCadastrada.id != nomeJaCadastrado){
                return res.status(400).json({"erro": "Nome de categoria já cadastrado"});
            }

            await CategoriaRepository.atualizar(req.params.id, req.body);

            let categoriaAtualizada = await CategoriaRepository.buscarPorId(req.params.id);

            return res.status(200).json(categoriaAtualizada);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async excluir(req, res) {
        try {
            let categoriaCadastrada = await CategoriaRepository.buscarPorId(req.params.id);
            
            if(!categoriaCadastrada){
                return res.status(404).json({"erro": "Id não encontrado"});
            }

            await CategoriaRepository.excluir(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }
}

module.exports = CategoriaController;
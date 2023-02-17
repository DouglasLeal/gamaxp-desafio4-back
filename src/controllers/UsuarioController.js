const bcrypt = require("bcryptjs");

const UsuarioRepository = require("../repositories/UsuarioRepository.js");

class UsuarioController{
    static async listar(req, res){
        try {
            let usuarios = await UsuarioRepository.listar();
            return res.status(200).json(usuarios);
        } catch (error) {
            console.log(error)
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async criar(req, res) {
        try {

            let usuarioCadastrado = await UsuarioRepository.buscarPorEmail(req.body.email);

            if(usuarioCadastrado){
                return res.status(400).json({"erro": "Email de usuário já cadastrado"});
            }

            req.body.senha = bcrypt.hashSync(req.body.senha);

            let novoUsuario = await UsuarioRepository.criar(req.body);
            return res.status(201).json(novoUsuario);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async atualizar(req, res) {
        try {
            let usuarioCadastrado = await UsuarioRepository.buscarPorId(req.params.id);
            
            if(!usuarioCadastrado){
                return res.status(404).json({"erro": "Id não encontrado"});
            }

            let emailCadastrado = await UsuarioRepository.buscarPorEmail(req.body.email);

            if(emailCadastrado != null && usuarioCadastrado.id != emailCadastrado.id){
                return res.status(400).json({"erro": "Email de usuário já cadastrado"});
            }


            req.body.senha = bcrypt.hashSync(req.body.senha);

            await UsuarioRepository.atualizar(req.params.id, req.body);

            let categoriaAtualizada = await UsuarioRepository.buscarPorId(req.params.id);

            return res.status(200).json(categoriaAtualizada);
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }

    static async excluir(req, res) {
        try {
            let usuarioCadastrado = await UsuarioRepository.buscarPorId(req.params.id);
            
            if(!usuarioCadastrado){
                return res.status(404).json({"erro": "Id não encontrado"});
            }

            await UsuarioRepository.excluir(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({"erro": "Erro ao processar a requisição."});
        }
    }
}

module.exports = UsuarioController;
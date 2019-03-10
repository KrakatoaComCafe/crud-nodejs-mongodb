const User = require('../models/user.model');
var logger = require('../services/logger');
var validation = require('../validations/user.validation');

exports.test = function(req, res){
    res.send('Greetings from the Test Controller');
}

/*
    Cria um usuário
*/
exports.user_create = function(req, resp){
    
    //Valida os possiveis erros no json enviado
    var errosValidados = validation(req);
    if(errosValidados){
        logger.info('Erro ao validar usuário');
        resp.status(400).send(errosValidados);
        return;
    }

    //Cria o usuário
    var user = new User({
        user: req.body.user,
        age: req.body.age,
        phone: req.body.phone,
        is_admin: req.body.is_admin
    });

    //Salva o usuário no banco
    user.save(function(error){
        if(error){
            logger.info('Aconteceu um erro ao salvar o usuario: '+ error);
            resp.status(400).send(error);
            return; 
        }
        resp.status(200).send('Usuario criado com sucesso');
    });
};

/*
    Procura um usuário pelo seu nome
*/
exports.user_details = function(req, resp){
    User.findOne({"user":req.params.userName}, function(error, user){
        if(error){
            logger.info('Erro ao buscar usuário: ' + error);
            resp.status(500).send(erro);
            return;
        }
        resp.status(200).send(user);
    });
};

/*
    Mostra todos os usuários
*/
exports.user_showAll = function(req, resp){
    User.find(function(error, user){
        if(error) {
            logger.info('Erro ao buscar todos os usuarios: ' + error);
            return next(error);
        }
        resp.status(200).send(user);
    });
};

/*
    Atualiza o usuário a partir de seu nome
*/
exports.user_update = function(req, resp) {
    console.log('Iniciando update: '+ req.params.userName);
    User.findOneAndUpdate({"user":req.params.userName}, {$set:req.body}, function(error, user){
        if(error) {
            logger.info('Erro ao realizar update: ' + error);
            resp.status(500).send(error);
            return;
        }
        resp.status(201).send('Update realizado');
    });
};

/*
    Deleta o usuário a partir do seu nome
*/
exports.user_delete = function(req, resp){
    console.log('Deletando usuario: ' + req.params.userName);
    User.findOneAndRemove({"user":req.params.userName}, function(error){
        if(error){
            logger.info('Falha ao deletar usuario: ' + req.params.userName +' - error: ' + error);
            resp.status(500).send(erro);
            return;
        }
        resp.status(200).send('Usuario deletado');
    });
};


var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var logger = require('../services/logger');
var morgan = require('morgan');
var user = require('../routes/user');
var db = require('./dbConnection');

db.createDBConnection();

module.exports = function(){
    var app = express();

    //Configuração da criação de logs
    app.use(morgan("common", {
        stream:{
            write:function(message){
                logger.info(message);
            }
        }
    }));

    app.use(expressValidator());

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/users', user);

    return app;
}

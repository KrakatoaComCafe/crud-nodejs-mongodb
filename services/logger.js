var winston = require('winston');
var fs = require('fs');

//Cria a pasta, caso não exista
if(!fs.existsSync('logs')) {
    fs.mkdirSync('logs');
}

//Configura a criação de log
module.exports = new winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/logCagueta.log",
            maxsize: 100000,
            maxFiles: 10
        })
    ]
});
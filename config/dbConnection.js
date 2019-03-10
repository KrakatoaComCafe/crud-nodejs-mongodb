var mongoose = require('mongoose');

//Cria a conexão com o mongoDB
module.exports = {
    createDBConnection: function() {
        var db_url = 'mongodb://localhost:27017/test';
        //Utiliza o banco do mongoLab
        //var db_url = "mongodb+srv://<user>:<senha>@krakatoacluster01-hosqh.mongodb.net/test?retryWrites=true";
        
        var mongoDB = process.env.mongoDB_URI || db_url;
        mongoose.connect(mongoDB, { useNewUrlParser: true } );
        mongoose.Promise = global.Promise; //usar em mongoose < 5
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, "MongoBD connection error:"));
    }
}
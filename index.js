var app = require('./config/custom-express')();

const port = process.env.PORT || 1234;

app.listen(port, () =>{
    console.log('Servidor rodando na porta: ' + port);
});

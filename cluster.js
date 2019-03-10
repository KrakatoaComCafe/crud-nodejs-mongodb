var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();

if(cluster.isMaster) {
    //Cria uma thread para cada núcleo
    cpus.forEach(function(){
        cluster.fork();
    });

    cluster.on('listening', function(worker){
        console.log('Cluster conectado: ' + worker.process.pid);
    });

    //Cria novo thread caso algum seja fechado
    cluster.on('exit', worker => {
        console.log('Cluster %d desconectado', worker.process.pid);
        cluster.fork();
    });
} else {
    //executa o index caso seja slave
    require('./index');
}

# CRUD - Node.Js e MongoDB

Projeto com operações básicas utilizando Nodejs e MongoDB.

## Dependências utilizadas no Nodejs:

- express;
- body-parser;
- express-validator;
- mongoose;
- winston;
- morgan;

## Testando a Aplicação:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) ou o [cURL](https://curl.haxx.se/).


Depois de realizar o download, basta agora realizar os passos abaixo para 
poder testar.

  ROTA                    |     HTTP(Verbo)   |      Descrição        		| 
------------------------- | ----------------- | ----------------------------| 
/user/create              |       POST        | Criar usuário          		| 
/user/:name 	          |       GET         | Procurar usuário por nome   | 
/allUsers  				  |       GET         | Selecionar todos os usuários| 
/user/update/:name		  |       PUT         | Atualizar a partir do nome	|    
/user/delete/:name	 	  |       DELETE      | Excluir a partir do nome	|

O formato do json a ser enviado para criar ou atualizar é mostrado a seguinte:
```
{
	"name": String,
	"age": Number,
	"phone": Number,
	"is_admin": Boolean
}
```

Normalmente é utilizado o ID do objeto nas operações, entretanto existem dois motivos para eu utilizar o nome:
- IDs do MongoDB tem o formato muito grande.
- Eu sou preguiçoso.

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

p.s.: o MongoDb caso você decida conectar a sua base de dados de maneira local. Caso não, basta usar a base de dados do MongoDb em Cloud: [MLab](https://mlab.com/)

### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\...\projeto"
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

Caso as dependências não sejam instaladas, o comando abaixo pode ser utilizado:
```
npm install --save express express-validator body-parser mongoose winston morgan
```

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.
Existem dois arquivos para iniciar o server.
- index.js
- cluster.js

O primeiro inicial o server utilizando apenas um núcleo, o segundo utiliza todos os núcleos. Qualquer um pode ser escolhido.

Comando para iniciar o server:
```
node index.js
```
ou
```
node cluster.js
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb.
Sera necessário criar uma pasta chamada 'db' no seu projeto.
```
mkdir db
```
O caminho para a pasta será algo parecido com o caminho abaixo:
```
C:\Users\NomeDoComputador\Documents\...\projeto\db
``` 

 Agora basta digitar na tela do cmd o seguinte comando:

```
mongod --dbpath C:\Users\NomeDoComputador\Documents\...\projeto\db
```
Caso tenha feito corretamente, foi criado um banco isolado para esse projeto.


Agora, abre a página da aplicação em `http://localhost:1234/test`. E pronto a aplicação será executada de maneira local na sua máquina e deverá retorna 'OK' como mensagem.
```
OK =D
```  

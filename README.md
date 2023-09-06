README - API de Carros com Node e Express
Este é um guia passo a passo para criar uma API simples de carros do zero usando Node.js e
o framework Express. A API terá três endpoints:

Listagem de Carros: GET /carros
Obter um Carro pelo ID: GET /carros/:id
Excluir um Carro pelo ID: DELETE /carros/:id

Passo 1: Iniciando o Projeto
Crie um novo diretório para o projeto e navegue até ele usando o terminal:

mkdir api-carros
cd api-carros
Inicialize um novo projeto Node.js usando o comando:

npm init -y
Isso criará um arquivo package.json com as configurações padrão.

Passo 2: Instalando as Dependências
Agora, vamos instalar as dependências necessárias para criar a API:

npm install express, nodemon
Express: Um framework Node.js para construir aplicativos da web.
Nodemon: Uma ferramenta que reinicia automaticamente o servidor sempre que você faz alterações no código.

Passo 3: Criando a Estrutura do Projeto
Crie um arquivo app.js na raiz do projeto. Este será o arquivo principal da nossa aplicação.

const app.js app.js

Passo 4: Configurando o Express
No arquivo app.js, configure o Express e crie os três endpoints solicitados:

Listagem de Carros: GET /carros
Obter um Carro pelo ID: GET /carros/:id
Excluir um Carro pelo ID: DELETE /carros/:id

Passo 5: Iniciando o Servidor com Nodemon
Para iniciar o servidor e usar o Nodemon para reiniciá-lo automaticamente quando houver alterações no código,
adicione o seguinte script ao seu package.json:

"scripts": {
"dev ": "nodemon index.js"
}

Passo 6: Iniciando a API
Agora, você pode iniciar sua API de carros com o seguinte comando:

npm run dev
Sua API estará disponível em http://localhost:3000.

Uso da API
Para listar todos os carros, faça uma solicitação GET para http://localhost:3000/carros.

Para obter um carro pelo ID, faça uma solicitação GET para http://localhost:3000/carros/:id,
substituindo :id pelo ID do carro desejado.

Para excluir um carro pelo ID, faça uma solicitação DELETE para http://localhost:3000/carros/:id,
substituindo :id pelo ID do carro a ser excluído.

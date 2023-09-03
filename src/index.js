const express = require(`express`);
const PORT = 3000;
const {
  listageCarros,
  obterCarro,
  excluirCarro,
} = require(`./controladores/carros`);
const { validaSenha } = require(`./intermediarios`);

const app = express();

app.use(validaSenha);

app.get(`/carros`, listageCarros);
app.get(`/carros/:id`, obterCarro);
app.delete("/carros/:id", excluirCarro);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

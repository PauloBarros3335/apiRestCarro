const carros = require("../bancoDeDados");

const listageCarros = (req, res) => {
  const { marca, cor } = req.query;
  let resultado = carros;

  if (marca) {
    resultado = resultado.filter((carro) => {
      return carro.marca === marca;
    });
  }
  if (cor) {
    resultado = resultado.filter((carro) => {
      return carro.cor === cor;
    });
  }

  if (resultado.length > 0) {
    // Se houver resultados, retorne 200 (OK)
    return res.status(200).send(resultado);
  } else {
    // Se não houver resultados, retorne 400 (Bad Request)
    return res.status(400).json({ mensagem: "Nenhum carro encontrado." });
  }
};

const obterCarro = (req, res) => {
  const { id } = req.params;

  const carroEncontrado = carros.find((carro) => {
    return carro.id === Number(id);
  });

  if (carroEncontrado) {
    // Se o carro for encontrado, retorne 200 (OK)
    return res.status(200).send(carroEncontrado);
  } else {
    // Se o carro não for encontrado, retorne 400 (Bad Request)
    return res.status(400).json({ mensagem: "Carro não encontrado." });
  }
};

// Rota para excluir um carro pelo ID

const excluirCarro = (req, res) => {
  const { id } = req.params;

  const index = carros.findIndex((carro) => carro.id === Number(id));

  if (index !== -1) {
    carros.splice(index, 1);
    res.status(200).json({ mensagem: "Carro excluído com sucesso." });
  } else {
    res.status(400).json({ mensagem: "Carro não encontrado." });
  }
};

module.exports = {
  listageCarros,
  obterCarro,
  excluirCarro,
};

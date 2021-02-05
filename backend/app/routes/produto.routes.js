module.exports = app => {
  const produtos = require("../controllers/produto.controller.js");
  var cors = require('cors')

  // Criando um novo Produto
  app.post("/produtos", produtos.create);

  // Buscando todos os produtos
  app.get("/produtos", cors(), produtos.findAll);

  // Buscando produto por id do produto
  app.get("/produtos/:produtoId", cors(), produtos.findOne);

  // Atualizando produto por com base no Id do Produto
  app.put("/produtos/:produtoId", cors(), produtos.update);

  // Deletando um Produto por Id do mesmo
  app.delete("/produtos/:produtoId", cors(), produtos.delete);

  // Deletando todos os produtos
  app.delete("/produtos", cors(), produtos.deleteAll);
};

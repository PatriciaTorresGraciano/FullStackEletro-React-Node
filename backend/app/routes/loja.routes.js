module.exports = app => {
  const lojas = require("../controllers/loja.controller.js");
  var cors = require('cors')

  // Criando uma nova Loja
  app.post("/lojas", cors(), lojas.create);

  // Buscando todas as lojas
  app.get("/lojas", cors(), lojas.findAll);

  // Buscando loja por id
  app.get("/lojas/:lojaId", cors(), lojas.findOne);

  // Atualizando loja com base no Id do Produto
  app.put("/lojas/:lojaId", cors(), lojas.update);

  // Deletando Loja por Id
  app.delete("/lojas/:lojaId", cors(), lojas.delete);

  // Deletando todas as lojas
  app.delete("/lojas", cors(), lojas.deleteAll);
};

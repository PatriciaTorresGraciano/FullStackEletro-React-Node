module.exports = app => {
    const pedido = require("../controllers/pedido.controller.js");
    var cors = require('cors')
  
    // Criando um novo Produto
    app.post("/pedidos", pedido.create);
  
    // Buscando todos os pedidos
    app.get("/pedidos", cors(), pedido.findAll);
  
    // Buscando produto por id do produto
    app.get("/pedidos/:pedidoId", cors(), pedido.findOne);
  
    // Atualizando produto por com base no Id do Produto
    app.put("/pedidos/:pedidoId", cors(), pedido.update);
  
    // Deletando um Produto por Id do mesmo
    app.delete("/pedidos/:pedidoId", cors(), pedido.delete);
  
    // Deletando todos os pedidos
    app.delete("/pedidos", cors(), pedido.deleteAll);
  };
  
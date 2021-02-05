const Pedido = require("../models/pedido.model.js");

// Cria e Salva uma nova pedido
exports.create = (req, res) => {
  // Valida a Requisição
  if (!req.body) {
    res.status(400).send({
      message: "Conteúdo não pode ser vazio!"
    });
  }
  // Cria uma pedido
  const Pedido = new Pedido({
    categorias_fk: req.body.carcategorias_fk,
    nome_cliente: req.body.nome_cliente,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    valor_unitario: req.body.valor_unitario,
    quantidade: req.body.quantidade,
    valor_total: req.body.valor_total,
    produto_fk: req.body.produto_fk

  });

  // Salva uma pedido no banco de Dados
  Pedido.create(pedido, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro durante o salvamento da pedido."
      });
    else res.send(data);
  });
};

// Recupere todas as pedidos do banco de dados.
exports.findAll = (req, res) => {
  Pedido.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao recuperar as pedidos."
      });
    else res.send(data);
  });
};

// Busca pedido por Id
exports.findOne = (req, res) => {
  Pedido.findById(req.params.pedidoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Id da pedido não encontrado ${req.params.pedidoId}.`
        });
      } else {
        res.status(500).send({
          message: "Erro ao pesquisar pedido por Id " + req.params.pedidoId
        });
      }
    } else res.send(data);
  });
};

// Atualiza uma pedido pelo Id da pedido
exports.update = (req, res) => {
  // Valida Requisição
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio!"
    });
  }

  console.log(req.body);

  Pedido.updateById(
    req.params.pedidoId,
    new pedido(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Id da pedido não encontrado ${req.params.pedidoId}.`
          });
        } else {
          res.status(500).send({
            message: "Erro ao atualizar pedido com id " + req.params.pedidoId
          });
        }
      } else res.send(data);
    }
  );
};

// Excluir Loja com Id 
exports.delete = (req, res) => {
  Pedido.remove(req.params.pedidoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Id do Pedido não encontrado ${req.params.pedidoId}.`
        });
      } else {
        res.status(500).send({
          message: "Não foi Possivél deletar a Pedido com o Id " + req.params.pedidoId
        });
      }
    } else res.send({ message: `Pedido deletado com sucesso!` });
  });
};

// Deletar todas as Lojas do banco de dados.
exports.deleteAll = (req, res) => {
  Pedido.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu algun erro ao deletar todas os Pedidos."
      });
    else res.send({ message: `Todos os Pedidos foram deletados com sucesso!` });
  });
};

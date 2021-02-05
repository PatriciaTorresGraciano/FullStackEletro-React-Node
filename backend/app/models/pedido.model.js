const sql = require("./db.js");

// constructor
const Pedidos = function(pedidos) {
  this.categorias_fk = pedidos.carcategorias_fk;
  this.nome_cliente = pedidos.nome_cliente;
  this.endereco = pedidos.endereco;
  this.telefone = pedidos.telefone;
  this.valor_unitario = pedidos.valor_unitario;
  this.quantidade = pedidos.quantidade;
  this.valor_total = pedidos.valor_total;
  this.produto_fk = pedidos.produto_fk;

};

Pedidos.create = (newPedido, result) => {
  sql.query("INSERT INTO pedidos SET ?", newPedidos, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Pedido criado com sucesso: ", { id: res.insertId, ...newPedidos });
    result(null, { id: res.insertId, ...newPedidos });
  });
};

Pedidos.findById = (pedidoId, result) => {
  sql.query(`SELECT * FROM pedidos WHERE id = ${pedidoId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("pedido encontrada: ", res[0]);
      result(null, res[0]);
      return;
    }

    // pedido não encontrado com o id
    result({ kind: "Não encontrado" }, null);
  });
};

Pedidos.getAll = result => {
  sql.query("SELECT * FROM pedidos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Pedidos: ", res);
    result(null, res);
  });
};

Pedidos.updateById = (id, pedido, result) => {
  sql.query(
    "UPDATE pedidos SET  categorias_fk = ? , nome_cliente = ?, endereco = ?, telefone = ?, valor_unitario = ?, quantidade = ?, valor_total = ?, produto_fk = ? WHERE id = ?",
    [pedido.categorias_fk,  pedido.nome_cliente,  pedido.endereco,  pedido.telefone,  pedido.valor_unitario,  pedido.quantidade, pedido.valor_total, produto.produto_fk, id ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // pedido não encontrado com o id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("pedido atualizada: ", { id: id, ...pedido });
      result(null, { id: id, ...pedido });
    }
  );
};

Pedidos.remove = (id, result) => {
  sql.query("DELETE FROM pedidos WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // pedido não encontrado com o Id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("pedido excluído com id: ", id);
    result(null, res);
  });
};

Pedidos.removeAll = result => {
  sql.query("DELETE FROM pedidos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Pedidos`);
    result(null, res);
  });
};

module.exports = Pedidos;

const sql = require("./db.js");

// constructor
const Categoria = function(categoria) {
  this.nome = categoria.nome;

};

Categoria.getAll = result => {
  sql.query("SELECT * FROM categorias", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Produtos: ", res);
    result(null, res);
  });
};

module.exports = Categoria;
const sql = require("./db.js");

const Comentario = function(comentario) {
    this.nome = comentario.nome;
    this.mensagem = comentario.mensagem;

  };

  Comentario.create = (newComentario, result) => {
    sql.query("INSERT INTO comentarios SET ?", newComentario, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Mensagem criada com sucesso: ", { id: res.insertId, ...newComentario });
      result(null, { id: res.insertId, ...newComentario });
    });
  };

  Comentario.getAll = result => {
    sql.query("SELECT * FROM comentarios", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Mensagens: ", res);
      result(null, res);
    });
  };
  
  module.exports = Comentario;

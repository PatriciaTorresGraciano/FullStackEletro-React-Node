const Categoria = require("../models/categoria.model.js");

exports.findAll = (req, res) => {
    Categoria.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao recuperar a categoria do produto."
        });
      else res.send(data);
    });
  };
  
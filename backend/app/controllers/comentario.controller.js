const Comentario = require("../models/comentario.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Conteúdo não pode ser vazio!"
      });
    }

    const comentario = new Comentario({
      nome: req.body.nome,
      mensagem: req.body.mensagem
      
      });

      Comentario.create(comentario, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro durante o salvamento da Mensagem."
          });
        else res.send(data);
      });
    };
    
    exports.findAll = (req, res) => {
        Comentario.getAll((err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Ocorreu um erro ao recuperar as Mensagens."
            });
          else res.send(data);
        });
      };

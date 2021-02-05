module.exports = app => {
    const comentario = require("../controllers/comentario.controller.js");
    var cors = require('cors');
  

    app.post("/comentarios", cors(), comentario.create);
  
    app.get("/comentarios", cors(), comentario.findAll);

};
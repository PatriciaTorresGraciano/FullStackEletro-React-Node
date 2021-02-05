module.exports = app => {
    const categorias = require("../controllers/categoria.controller.js");
    var cors = require('cors')


    app.get("/categorias", cors(), categorias.findAll); 

};
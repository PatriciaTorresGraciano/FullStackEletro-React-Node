const express = require("express");
const bodyParser = require("body-parser");


const app = express();

// analizar pedidos content-type - application/json
app.use(bodyParser.json());

// Analisa solicitações do tipo content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Rota principal
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo a aplicação Fullstack Eletro." });
});

require("./app/routes/produto.routes.js")(app);
require("./app/routes/loja.routes.js")(app);
require("./app/routes/pedido.routes.js")(app);
require("./app/routes/categoria.routes.js")(app);
require("./app/routes/comentario.routes.js")(app);


// atribuindo uma porta, e executando a requisição 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});

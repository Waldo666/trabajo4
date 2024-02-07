const express = require("express");
const app = express();
const PUERTO = 8080;
const productos = require("./models/productos.json"); // Especifica la ruta completa al archivo productos.json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar el módulo express-handlebars
const expressHbs = require("express-handlebars");

// Usar expressHbs.engine() para registrar Handlebars como el motor de vistas
app.engine("handlebars", expressHbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  const usuario = {
    nombre: "Waldo",
    apellido: "MACHO"
  };
  // Pasar los productos al renderizar la vista
  res.render("index", { titulo: "Hola!", usuario, productos });
});

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});

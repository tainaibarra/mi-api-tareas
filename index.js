const express = require("express");
const app = express();

app.use(express.json());

const rutas = require("./routes");

// Usamos /tareas como base de la API
app.use("/tareas", rutas);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
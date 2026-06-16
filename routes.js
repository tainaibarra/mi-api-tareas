const express = require("express");
const router = express.Router();

let tareas = require("./data");

// GET - Listar todas las tareas
router.get("/", (req, res) => {
  res.json(tareas);
});

// POST - Crear tarea
router.post("/", (req, res) => {
  const { titulo, descripcion, completada } = req.body;

  if (!titulo || typeof completada !== "boolean") {
    return res.status(400).json({
      error: "Datos inválidos (titulo y completada son obligatorios)"
    });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion,
    completada
  };

  tareas.push(nuevaTarea);

  res.status(201).json(nuevaTarea);
});

// PUT - Actualizar tarea
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({
      error: "Tarea no encontrada"
    });
  }

  tarea.titulo = req.body.titulo ?? tarea.titulo;
  tarea.descripcion = req.body.descripcion ?? tarea.descripcion;

  if (req.body.completada !== undefined) {
    tarea.completada = req.body.completada;
  }

  res.json(tarea);
});

// DELETE - Eliminar tarea
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tareas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Tarea no encontrada"
    });
  }

  tareas.splice(index, 1);

  res.json({
    mensaje: "Tarea eliminada correctamente"
  });
});

module.exports = router;
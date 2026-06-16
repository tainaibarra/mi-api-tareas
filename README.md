# API de Tareas - Express.js

## Descripción del proyecto

Este proyecto es una API REST básica desarrollada con Node.js y Express.js que permite gestionar tareas mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El objetivo es comprender cómo funciona un servidor con Express, el manejo de rutas y el intercambio de datos en formato JSON sin usar base de datos.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- Postman

---

## Instalación y ejecución

### 1. Instalar dependencias

npm install

### 2. Ejecutar el servidor

node index.js

El servidor se ejecuta en:

http://localhost:3000

---

## Endpoints de la API

### GET - Obtener todas las tareas

GET http://localhost:3000/tareas

Respuesta:
```json
[
  {
    "id": 1,
    "titulo": "Estudiar Express",
    "descripcion": "Aprender CRUD",
    "completada": false
  }
]
POST - Crear tarea

POST http://localhost:3000/tareas

Body:

{
  "titulo": "Hacer tarea IPG",
  "descripcion": "Back End Express",
  "completada": false
}

Respuesta:

{
  "id": 2,
  "titulo": "Hacer tarea IPG",
  "descripcion": "Back End Express",
  "completada": false
}
PUT - Actualizar tarea

PUT http://localhost:3000/tareas/1

Body:

{
  "titulo": "Tarea actualizada",
  "descripcion": "Editada",
  "completada": true
}

Respuesta:

{
  "id": 1,
  "titulo": "Tarea actualizada",
  "descripcion": "Editada",
  "completada": true
}
DELETE - Eliminar tarea

DELETE http://localhost:3000/tareas/1

Respuesta:

{
  "mensaje": "Tarea eliminada correctamente"
}
Evidencias

Se realizaron pruebas en Postman para verificar el funcionamiento de la API:

GET: listar tareas
POST: crear tarea
PUT: actualizar tarea
DELETE: eliminar tarea

(aqui se insertan las capturas de postman)
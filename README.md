# API de Tareas - Express.js

## Descripción del proyecto

Este proyecto es una API REST desarrollada con Node.js y Express.js que permite gestionar una lista de tareas mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Los datos se almacenan en un archivo local (data.js) utilizando un array de objetos, sin base de datos.

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

http://localhost:3000/tareas

---

## Estructura del proyecto

mi-api-tareas
│
├── index.js
├── routes.js
├── data.js
├── package.json
├── node_modules

---

## Endpoints de la API

### GET - Obtener todas las tareas

GET http://localhost:3000/tareas

Respuesta:
```json
[
  {
    "id": 1,
    "titulo": "Aprende Node.js",
    "descripcion": "Estudiar los fundamentos",
    "completada": false
  }
]
POST - Crear tarea

POST http://localhost:3000/tareas

Body:

{
  "titulo": "Nueva tarea",
  "descripcion": "Ejemplo de creación",
  "completada": false
}

Respuesta:

{
  "id": 3,
  "titulo": "Nueva tarea",
  "descripcion": "Ejemplo de creación",
  "completada": false
}
PUT - Actualizar tarea

PUT http://localhost:3000/tareas/1

Body:

{
  "titulo": "Tarea actualizada",
  "descripcion": "Modificada",
  "completada": true
}

Respuesta:

{
  "id": 1,
  "titulo": "Tarea actualizada",
  "descripcion": "Modificada",
  "completada": true
}
DELETE - Eliminar tarea

DELETE http://localhost:3000/tareas/1

Respuesta:

{
  "mensaje": "Tarea eliminada correctamente"
}
Evidencias

Se realizaron pruebas en Postman para validar el funcionamiento de la API:

GET: listar tareas
POST: crear tarea
PUT: actualizar tarea
DELETE: eliminar tarea

(Aquí se insertan las capturas de Postman)
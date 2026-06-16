# API de Tareas - Express.js

## Descripción del proyecto

Este proyecto es una API REST desarrollada con Node.js y Express.js que permite gestionar tareas mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

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

## Endpoints de la API

### GET - Obtener todas las tareas
GET http://localhost:3000/tareas

---

### POST - Crear una tarea
POST http://localhost:3000/tareas

---

### PUT - Actualizar una tarea
PUT http://localhost:3000/tareas/:id

---

### DELETE - Eliminar una tarea
DELETE http://localhost:3000/tareas/:id

---

## Evidencias de pruebas en Postman

### Prueba 1: GET – listar todas las tareas
Se realizó una solicitud GET al endpoint para obtener las tareas.

![GET](images/get.png)

---

### Prueba 2: POST – crear una nueva tarea
Se creó una nueva tarea mediante POST.

![POST](images/post.png)

---

### Prueba 3: Verificación de tareas registradas
Se verificó que la tarea fue agregada correctamente.

![VERIFICACION](images/get.png)

---

### Prueba 4: PUT – actualización de una tarea
Se actualizó una tarea existente.

![PUT](images/put.png)

---

### Prueba 5: DELETE – eliminar tarea
Se eliminó una tarea correctamente.

![DELETE](images/delete.png)

---

### Prueba 6: Comprobación de error
Se probó un recurso inexistente.

![ERROR](images/error.png)

---

## Autor

Taina Ibarra
const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks');

/**
 * @swagger
 * /tasks:
 *  get:
 *     description: Obtener todas las tareas que se tienen guardadas
 *     responses:
 *       200:
 *         description: Se obtiene todo el contenido de la base de datos
 *       400:
 *         description: No se obtuvieron los datos esperados
 *
 */
router.get('', tasks.showAll);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *     description: Obtener todas las tareas que se tienen guardadas
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Se obtiene todo el contenido de la base de datos
 *       400:
 *         description: No se obtuvieron los datos esperados
 *
 */
router.get('/:id', tasks.showByID);

/**
 * @swagger
 * /tasks:
 *  post:
 *     description: crear una nueva tarea
 *     parameters: 
 *       - in: body
 *         name: titulo
 *         description: El esquema de la nueva tarea 
 *         schema:
 *           type: string
 *     responses:
 *       200: 
 *         description: Agrega una tarea
 *       400: 
 *         description: No agrega una tarea
 * 
 */
router.post('', tasks.insertTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *     description: Actualizar una tarea guardada
 *     parameters:
 *       - in: path
 *         name: id
 *       - in: body
 *         name: titulo
 *         description: El esquema de una tarea cambiada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Se pudo hacer el cambio en la tarea
 *       400:
 *         description: No se pudo cambiar la tarea
 *
 */
router.put('/:id', tasks.replaceTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *     description: Eliminar una tarea guardada
 *     parameters: 
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Se pudo quitar la tarea
 *       400:
 *         description: No se pudo quitar la tarea
 *
 */
router.delete('/:id', tasks.deleteTask);

module.exports = router;
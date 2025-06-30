import { Router } from 'express';
import {
    crearSayayin,
    obtenerSayayines,
    obtenerSayayin,
    actualizarSayayin,
    eliminarSayayin
} from '../controllers/sayayin.controller';

const sayayinRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Sayayin
 *     description: API para gestionar personajes sayayins
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Planet:
 *       type: object
 *       required: [id, name, isDestroyed, description, image]
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         isDestroyed:
 *           type: boolean
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 * 
 *     Transformation:
 *       type: object
 *       required: [id, name, image, ki]
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         image:
 *           type: string
 *         ki:
 *           type: string
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 * 
 *     Sayayin:
 *       type: object
 *       required: [id, name, ki, maxKi, race, gender, description, image, affiliation, originPlanet, transformations]
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         ki:
 *           type: string
 *         maxKi:
 *           type: string
 *         race:
 *           type: string
 *         gender:
 *           type: string
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         affiliation:
 *           type: string
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         originPlanet:
 *           $ref: '#/components/schemas/Planet'
 *         transformations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Transformation'
 */
/**
 * @swagger
 * /api/sayayins:
 *   get:
 *     summary: Obtener todos los sayayins
 *     tags: [Sayayin]
 *     responses:
 *       200:
 *         description: Lista de sayayins
 *
 *   post:
 *     summary: Crear un nuevo Sayayin
 *     tags: [Sayayin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sayayin'
 *     responses:
 *       201:
 *         description: Sayayin creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /api/sayayins/{id}:
 *   get:
 *     summary: Obtener un sayayin por ID
 *     tags: [Sayayin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sayayin
 *     responses:
 *       200:
 *         description: Sayayin encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sayayin'
 *       404:
 *         description: Sayayin no encontrado
 *
 *   put:
 *     summary: Actualizar un sayayin por ID
 *     tags: [Sayayin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sayayin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sayayin'
 *     responses:
 *       200:
 *         description: Sayayin actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Sayayin no encontrado
 *
 *   delete:
 *     summary: Eliminar un sayayin por ID
 *     tags: [Sayayin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del sayayin
 *     responses:
 *       204:
 *         description: Sayayin eliminado exitosamente
 *       404:
 *         description: Sayayin no encontrado
 */
sayayinRouter.get('/', obtenerSayayines);
sayayinRouter.post('/', crearSayayin);
sayayinRouter.get('/:id', obtenerSayayin);
sayayinRouter.put('/:id', actualizarSayayin);
sayayinRouter.delete('/:id', eliminarSayayin);

export default sayayinRouter;
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
 *   name: Sayayin
 *   description: API para gestionar personajes sayayins
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
 */
sayayinRouter.get('/', obtenerSayayines);
// 🔐 Middleware global para rutas protegidas
//sayayinRouter.use(AuthVerify);
/**
 * @swagger
 * components:
 *   schemas:
 *     Sayayin:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - race
 *         - gender
 *         - description
 *         - image
 *         - affiliation
 *         - originPlanet
 *         - ki
 *         - maxKi
 *         - transformations
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador numérico único del sayayin
 *         name:
 *           type: string
 *           description: Nombre del sayayin
 *         race:
 *           type: string
 *           enum: [Saiyajin, Humano, Namekuseijin]
 *           description: Raza del personaje
 *         gender:
 *           type: string
 *           enum: [Masculino, Femenino, Otro]
 *           description: Género del personaje
 *         description:
 *           type: string
 *           description: Descripción del personaje
 *         image:
 *           type: string
 *           format: uri
 *           description: URL de la imagen del personaje
 *         affiliation:
 *           type: string
 *           description: Afiliación o grupo del personaje
 *         originPlanet:
 *           $ref: '#/components/schemas/Planet'
 *         ki:
 *           type: string
 *           description: Nivel actual de Ki (como texto para valores grandes)
 *         maxKi:
 *           type: string
 *           description: Nivel máximo de Ki (como texto para valores enormes)
 *         transformations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Transformation'
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha de eliminación (borrado lógico)
 *       example:
 *         id: 2
 *         name: "Vegeta"
 *         race: "Saiyajin"
 */       
sayayinRouter.get('/:id', obtenerSayayin);
sayayinRouter.post('/', crearSayayin);
sayayinRouter.put('/:id', actualizarSayayin);
sayayinRouter.delete('/:id', eliminarSayayin);

export default sayayinRouter;
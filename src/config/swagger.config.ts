import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sayayin API',
      version: '1.0.0',
      description: 'API REST de personajes y transformaciones Sayayin',
    },
  },
  apis: ['./src/routes/*.ts'], // rutas donde tienes los @swagger
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
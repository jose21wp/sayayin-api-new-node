import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import authRouter from './routes/auth.routes';
import sayayinRouter from './routes/sayayin.routes';
import { connectDB } from './config/db.mongo';
import { swaggerSpec } from './config/swagger.config';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
    console.error('❌ MONGO_URI no definida en .env');
    process.exit(1);
}

// 🛡️ Middlewares
app.use(cors());
app.use(express.json());

// 🧪 Ruta Auth
app.use('/api/auth', authRouter);
// 🧪 Ruta Sayayin
app.use('/api/sayayins', sayayinRouter);
// 🧬 MongoDB
connectDB(); // Conexión a Mongo
/* mongoose.connect(MONGO_URI, { dbName: 'vegito-db' })
    .then(() => console.log('✅ MongoDB conectado'))
    .catch((err) => console.error('❌ Error de MongoDB:', err));
 */
// 📚 Swagger
/* const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SAYAYIN-API',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

 */
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Si quieres exponer el JSON
app.get('/swagger.json', (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
// 🚀 Server
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
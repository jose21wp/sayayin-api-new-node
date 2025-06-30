import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conexión a MongoDB establecida');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    process.exit(1); // termina la app si no hay DB
  }
};
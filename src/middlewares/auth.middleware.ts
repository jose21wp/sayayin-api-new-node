import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: string;
  username: string;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export const AuthVerify: RequestHandler = (req, res, next): void => {
  const authHeader = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error('🔐 JWT_SECRET no está definido en el entorno');
    res.status(500).json({ message: 'Error de configuración del servidor' });
    return
  }

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Token no proporcionado o malformado' });
    return
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    console.warn('❌ Token inválido:', error);
    res.status(403).json({ message: 'Token inválido o expirado' });
    return
  }
};
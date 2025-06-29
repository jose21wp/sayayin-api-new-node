import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


interface RegisterRequestBody {
    username: string;
    password: string;
    email:string;
}

interface LoginRequestBody {
    email: string;
    password: string;
}

export const register = async (
    req: Request<{}, {}, RegisterRequestBody>,
    res: Response
): Promise<void> => {
    const { username, password,email } = req.body;

    if (!username || !password) {
        res.status(400).json({ message: 'Nombre de usuario y contraseña son obligatorios' });
        return;
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            res.status(400).json({ message: 'El usuario ya existe' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword ,email});
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error('Error en register:', error instanceof Error ? error.message : error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        console.log('BODY',req.body);

        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Contraseña incorrecta' });
            return;
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error('Falta JWT_SECRET en las variables de entorno');
            res.status(500).json({ message: 'Error interno de configuración' });
            return;
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            jwtSecret,
            { expiresIn: '8h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en login:', error instanceof Error ? error.message : error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};



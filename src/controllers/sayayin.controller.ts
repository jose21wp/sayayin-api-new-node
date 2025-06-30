import { Request, Response } from 'express';
import { Sayayin } from '../models/sayayin.model';

const handleError = (res: Response, action: string, error: unknown) => {
  console.error(`❌ Error al ${action}:`, error instanceof Error ? error.message : error);
  res.status(500).json({ message: `Error al ${action} Sayayin` });
};

export const crearSayayin = async (req: Request, res: Response) => {
  try {
    const nuevo = await new Sayayin(req.body).save();
    res.status(201).json(nuevo);
  } catch (error) {
    handleError(res, 'crear', error);
  }
};

export const obtenerSayayines = async (_req: Request, res: Response) => {
  try {
    const todos = await Sayayin.find();
    res.json(todos);
  } catch (error) {
    handleError(res, 'obtener', error);
  }
};

export const obtenerSayayin = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);

    const uno = await Sayayin.findOne({ id: req.params.id });
    uno
      ? res.json(uno)
      : res.status(404).json({ message: 'Sayayin no encontrado' });
  } catch (error) {
    handleError(res, 'obtener', error);
  }
};

export const actualizarSayayin = async (req: Request, res: Response) => {
  try {
    const actualizado = await Sayayin.findOneAndUpdate({id:req.params.id}, req.body, { new: true });
    actualizado
      ? res.json(actualizado)
      : res.status(404).json({ message: 'Sayayin no encontrado' });
  } catch (error) {
    handleError(res, 'actualizar', error);
  }
};

export const eliminarSayayin = async (req: Request, res: Response) => {
  try {
    const eliminado = await Sayayin.findOneAndDelete({ id: req.params.id });
    eliminado
      ? res.json({ message: 'Sayayin eliminado' })
      : res.status(404).json({ message: 'Sayayin no encontrado' });
  } catch (error) {
    handleError(res, 'eliminar', error);
  }
};
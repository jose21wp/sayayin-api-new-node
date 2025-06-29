import { model, Schema, Document } from "mongoose";
//LO CREE CON COPILOT PROFE XD
interface IPlanet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt?: Date | null;
}

interface ITransformation {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt?: Date | null;
}
interface ICharacter extends Document {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt?: Date | null;
    originPlanet: IPlanet;
    transformations: ITransformation[];
}

const PlanetSchema = new Schema<IPlanet>({
    id: { type: Number, required: true,  unique: false},
    name: { type: String, required: true },
    isDestroyed: { type: Boolean, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    deletedAt: { type: Date, default: null },
});

const TransformationSchema = new Schema<ITransformation>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    ki: { type: String, required: true },
    deletedAt: { type: Date, default: null },
});

const SayayinSchema = new Schema<ICharacter>({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    ki: { type: String, required: true },
    maxKi: { type: String, required: true },
    race: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    affiliation: { type: String, required: true },
    deletedAt: { type: Date, default: null },
    originPlanet: { type: PlanetSchema, required: true },
    transformations: { type: [TransformationSchema], required: true },
}, { timestamps: true });
export const Sayayin = model<ICharacter>('Sayayin', SayayinSchema);
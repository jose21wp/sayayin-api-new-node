import { connectDB } from "../src/config/db.mongo";
import { Sayayin } from '../src/models/sayayin.model';

// Definir tipos para la respuesta de PokeAPI
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

interface ICharacter {
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
// Definir el tipo del documento que se guardará en MongoDB
interface SayayinDocument {
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

async function getSayayin(id: number): Promise<SayayinDocument> {
    const res: any = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data: ICharacter = await res.json() as ICharacter;

    return {
        id: data.id,
        name: data.name,
        ki: data.ki,
        maxKi: data.maxKi,
        race: data.race,
        gender: data.gender,
        description: data.description,
        image: data.image,
        affiliation: data.affiliation,
        deletedAt: data.deletedAt,
        originPlanet: data.originPlanet, // Devuelve el objeto completo
        transformations: data.transformations, // Devuelve el arreglo completo

    }


}

async function seed(): Promise<void> {
    await connectDB();
    console.log('⬇️ Descargando info de SayayinAPI…');

    const docs: SayayinDocument[] = [];
    for (let id = 1; id <= 70; id++) {
        let array = await getSayayin(id);
        if (array.id) {
            docs.push(array);
        }
    }

    await Sayayin.deleteMany({});
    await Sayayin.insertMany(docs);
    console.log(`✅ Insertados ${docs.length} sayayines (1-150)`);
    process.exit(0);
}

seed().catch(console.error);
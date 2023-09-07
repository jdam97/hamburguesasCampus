import { Collection, ObjectId } from "mongodb";
import { connectDB } from "../../database/atlas.js"

//6.Encontrar todos los ingredientes con stock menor a 400
export const categorias = async ()=>{
    const db = await connectDB();
    const collection = db.collection('categorias');
    const data = await collection.find({}).toArray();
    console.log(data);
    return data;
};


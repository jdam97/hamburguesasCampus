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

//17.Encontrar todas las categorías que contienen la palabra "gourmet" en su descripción
export const categoriasgourmet = async ()=>{
    const db = await connectDB();
    const collection = db.collection('categorias');
    const data = await collection.aggregate([
        {
            $match:{"descripcion":"gourmet" }
        }
        
    ]).toArray();
    console.log(data);
    return data;
};
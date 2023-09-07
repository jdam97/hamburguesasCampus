import { Collection, ObjectId } from "mongodb";
import { connectDB } from "../../database/atlas.js"

//1.Encontrar todos los ingredientes con stock menor a 400
export const minIngredientes = async ()=>{
    const db = await connectDB();
    const collection = db.collection('ingredientes');
    const data =  await collection.aggregate([ 
        {
            $match:{stock:{$lt:400} }
        }
    ]).toArray();
    console.log(data);
    return data;
};

//9.Encontrar todas las hamburguesas que contienen "Pan integral" como ingrediente
export const hIngrediente = async ()=>{
    const db = await connectDB();
    const collection = db.collection('ingredientes');
    const data =  await collection.aggregate([ 
        {
            $lookup: {
              from: "hamburguesas",
              localField: "idHamburguesa",
              foreignField: "id",
              as: "hIngredientes"
            }
        },
        {
            $match:{"nombre":"pan integral"}
        }
    ]).toArray();
    console.log(data);
    return data;
};



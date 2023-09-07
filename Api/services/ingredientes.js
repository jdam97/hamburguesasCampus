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

//7.

//8. Agregar un nuevo ingrediente a la hamburguesa "Clásica"
export const addIngrediente = async(ingrediente)=>{
    let db = await connectDB();
    let collection = db.collection('ingredientes');
    let data = await collection.insertOne(ingrediente)
    return data 
}

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


//14.Encontrar todos los ingredientes que tienen una descripción que contiene la palabra "clásico"
export const iclasico = async ()=>{
    const db = await connectDB();
    const collection = db.collection('ingredientes');
    const data =  await collection.aggregate([ 
        {
            $match:{"descripcion":"clasico"}
        }
    ]).toArray();
    console.log(data);
    return data;
};

//Encontrar todos los ingredientes cuyo precio sea entre $2 y $5




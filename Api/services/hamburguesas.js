import { Collection, ObjectId } from "mongodb";
import { connectDB } from "../../database/atlas.js"

//2.Encontrar todas las hamburguesas de la categoría "Vegetariana"
export const hamburguerVegetarian = async ()=>{
    const db = await connectDB();
    const collection = db.collection('hamburguesas');
    const data =  await collection.aggregate([ 
        {
            $lookup: {
              from: "categorias",
              localField: "idCategorias",
              foreignField: "id",
              as: "categorias_Hamburguesas"
            }
        },
        {
            $match:{"categorias_Hamburguesas.nombre":"vegetariana"}
        },
        {
            $unwind: "$categorias_Hamburguesas"
        },
        {
            $project: {
              _id:0,
            }
        }
    ]).toArray();
    console.log(data);
    return data;
};

// 15.Listar las hamburguesas cuyo precio es menor o igual a $9
export const menorigual = async ()=>{
    const db = await connectDB();
    const collection = db.collection('hamburguesas');
    const data =  await collection.aggregate([ 
        {
            $match:{precio:{$lte:9} }
        }
    ]).toArray();
    console.log(data);
    return data;
};

//23.Encontrar todas las hamburguesas que contienen "Tomate" o "Lechuga" como ingredientes
export const tomateOlechuga = async ()=>{
    const db = await connectDB();
    const collection = db.collection('hamburguesas');
    const data =  await collection.aggregate([ 
        {
            $match:{precio:{$lte:9} }
        }
    ]).toArray();
    console.log(data);
    return data;
};


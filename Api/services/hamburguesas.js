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

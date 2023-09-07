import { ObjectId } from "mongodb";
import { connectDB } from "../../database/atlas.js"


export const getChefsCarnes = async ()=>{
    let db = await connectDB();
    let collection = db.collection('chefs');
    let data = await collection.aggregate([
        {
            $match:{"especialidad":"carnes"}
        },
        {
            $project:{
                _id:0
            }
        }
    ]).toArray();
    return data;
};

export const hamburchef = async ()=>{
    let db = await connectDB();
    let collection = db.collection('hamburguesas');
    let data = await collection.aggregate([
        {
            $lookup: {
              from: "chefs",
              localField: "idChefs",
              foreignField: "id",
              as: "hamburguesas_chef"
            }
        },
        {
            $match:{"hamburguesas_chef.nombre":"CheftB"}
        },
        {
            $unwind:"$hamburguesas_chef"},
        {
            $project:{
                _id:0,
                "hamburguesas_chef._id":0
            }
        }
    ]).toArray();
    return data;
};


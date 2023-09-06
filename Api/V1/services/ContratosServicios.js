import { ObjectId } from "mongodb";
import { connectDB } from "../../../database/atlas.js";

//Get All
export const getAllContratos = async ()=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.find().toArray();
    return data;
};

//Get by id
export const getContratosById = async (ContratosID)=>{
    console.log(ContratosID);
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.find({id:Number(ContratosID)}).toArray();

    return data;
};

//Post
export const createContratos = async (contrato)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let fechaContrato = new Date (contrato.fechaContrato)
    let datos = {...contrato,fechaContrato:fechaContrato}
    let data = await collection.insertOne(datos);
    return data;
};

//Delete
export const deleteContratos = async(contratos)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = collection.deleteOne({_id: new ObjectId(contratos)})
    return data
}

//Put
export const actualizarContratos= async(contratos_id,req)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let fechaContrato = new Date(req.body.fechaContrato)
    let datos = {...req.body,fechaContrato:fechaContrato};
    let data = await collection.updateOne({_id:new ObjectId(contratos_id) },{$set:datos})
    return data
}

//get todos los contratos de los usuarios
export const allContratos = async ()=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.aggregate([
        {
            $lookup: { // innerjoin en SQL
                from: "usuarios", //desde: acá se coloca la tabla que deseo enlazar
                localField: "usuarioId", // el campo el cual es foraneo con la tabla que puse arriba que deseo enlazar
                foreignField: "id", //el iD de la coleccion que deseo conectar, este seria el campo similar o en comun
                as:"contratos_usuarios",
            },  
        },
        {
            $unwind:"$contratos_usuarios"
        },
        {
            $match:{id:1}
        },
        {
            $project: { // $ project: sirve para omitir algunos campos que no quiero que me traiga en la solicitud
                _id: 0,
                ubicacion : 0,
                "contratos_usuarios._id":0
            },
        },
        { $group:
            {_id: '$id',
                contratos: {
                    $push: '$$ROOT'
            }}
        }
    ]).toArray();
    return data;
}

//get para obtener el total de una factura o venta
use("akio");
db.ventas.aggregate([
    {
        $match:{"id":1}
    },
    {
        $lookup: {//relaciono las tablas
          from: "productos",
          localField: "idProducto",
          foreignField: "id",
          as: "result"
        }
    },
    {
        $unwind: "$result"
    },
    {
        $project:{ //tambien sirve para hacer calculos de 1 solo documento, además de formatear la salida
            _id:"$id",
            producto:"$result.nombre",
            cantidad:"$cantidadVendida",
            total: {$multiply:["$cantidadVendida","$result.valorUnidad"]},//multiply me hace la multiplicacion de las cosas que le paso en el array
        }
    },
])

//get para obtener el total de todas las ventas o facturas
use('akio');
db.ventas.aggregate([
    {
        $lookup: {
          from: "productos",
          localField: "idProducto",
          foreignField: "id",
          as: "infoProductos"
        }
    },
    {
        $unwind:"$infoProductos"
    },
    {
        $project:{
            totalVenta:{$multiply:["$cantidadVendida","$infoProductos.valorUnidad"]}
        }
    },
    {
        $group:{
            _id:"totalVenta",
            maximo: { $max: "$totalVenta" }, // este seria para traerme el maximo de todo
            total:{$sum:"$totalVenta"} // me suma el total de todas las ventas que se hicieron
        }
    },
    // {
    //     $sort:{totalVenta:-1} sort ordena de manera descendente y el 1 ascendente de esta manera


    //INCREMENT:
    //     { "id": 123 }, // Filtro para encontrar el producto específico
    //     { $inc: { "cantidadDisponible": +5 } } // incrementar la cantidad en 5 unidades //
    // }

])
//operadores
// "$sum": "$totalVenta",
// "$avg": "$cantidad",
// "$min": "$precio",
// "$max": "$puntuacion",
// "$first": "$nombre",
// "$last": "$nombre",
// "$push": "$nombre",
// "$addToSet": "$nombre",
// "$multiply": ["$cantidad", "$precio"],
// "$divide": ["$ingresos", "$numVentas"]

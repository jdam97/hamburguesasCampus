import * as ingredientesQuerys from "../services/ingredientes.js"
import { validationResult } from "express-validator";

//Get
//1.Encontrar todos los ingredientes con stock menor a 400
export const getIngredientes = async(req,res)=>{
    console.log(req.rateLimit);
    try {
        const data = await ingredientesQuerys.minIngredientes();
        res.status(200).send({
            message:"Nice!",
            data
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los ingredientes menores de 400",
            error:error.message
        })
        console.log(error);

    }
}
//8
export const addIngredientes = async(req,res)=>{  
    const errors = validationResult(req); 
    if (!errors.isEmpty()) return res.status(422).send(errors);
    console.log(req.rateLimit);
    try {
        const data = await ingredientesQuerys.addIngrediente(req.body);
        res.status(200).send({
            message:"Nice!",
            data
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los ingredientes menores de 400",
            error:error.message
        })
        console.log(error);

    }
}


//9.Encontrar todas las hamburguesas que contienen "Pan integral" como ingrediente
export const hamIngredientes = async(req,res)=>{
    console.log(req.rateLimit);
    try {
        const data = await ingredientesQuerys.hIngrediente();
        res.status(200).send({
            message:"Nice!",
            data
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los ingredientes menores de 400",
            error:error.message
        })
        console.log(error);

    }
}
export const iClasico = async(req,res)=>{
    console.log(req.rateLimit);
    try {
        const data = await ingredientesQuerys.iclasico();
        res.status(200).send({
            message:"Nice!",
            data
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los ingredientes menores de 400",
            error:error.message
        })
        console.log(error);

    }
}


//Get by Id
// export const getAutosById = async(req,res)=>{
//     try {
//         let data = await autosQuerys.getAutosById(req.params.autosId)
//         res.status(200).send({
//             message:"Nice!",
//             data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message:"No se pudo obtener el auto por id",
//             error:error.message
//         })

//     }
// }

// //Post
// export const createAutos = async(req,res)=>{
//     console.log(req.rateLimit);
    
//     //Validacion    
//     const errors = validationResult(req); 
//     if (!errors.isEmpty()) return res.status(422).send(errors);

//     try {
//         let data = await autosQuerys.createAutos(req.body);
//         res.status(200).send({
//         message:"Reserva auto creada exitosamente!",
//         data
//     })
//     } catch (error) {
//         res.status(500).send({
//             message:"No se pudo crear la reserva auto",
//             error:error.message
//         })
//     }
// }

// //Delete
// export const deleteAutos = async(req,res)=>{
//     try {
//         await autosQuerys.deleteAutos(req.params._id);
//         res.status(200).send({
//             status:200,
//             message: "Reserva de auto eliminada con exito!"
//     })
        
//     } catch (error) {
//         res.status(500).send({
//             message:"No se pudo eliminar la reserva de auto",
//             error:error.message
//         })
//     }
// }

// //Put
// export const updateAutos = async(req,res)=>{
//     try {
//         await autosQuerys.putAutos(req.params._id,req)
//         res.status(200).send({
//             message:"Reserva editada con exito!",
//             status:200,
            
//         })
//     } catch (error) {
//         res.status(500).send({
//             message:"No se pudo actualizar la reserva",
//             error:error.message
//         })
//     }
// }


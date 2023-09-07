import * as chefsQuery from "../services/chefs.js";
import { validationResult } from "express-validator";


//Get All
export const  chefsCarnes = async (req, res) => {
    try {
        let data = await chefsQuery.getChefsCarnes();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  hamburguesaChef = async (req, res) => {
    try {
        let data = await chefsQuery.hamburchef();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};


























// //Get by id
// export const  getUsuariosById = async (req, res) => {
//     try {
//         let data = await UsuarioQuery.getUsuariosById(req.params.usuariosID);
//         res.status(200).send({status: 200,message: "Ok", data})
//     } catch (error) {
//         res.status(500).send({status: 500,message: error.message})        
//     }
// };

// //Post
// export const  createUsuarios = async (req, res) => {
//     console.log(req.rateLimit);
//     //Validacion    
//     const errors = validationResult(req); 
//     if (!errors.isEmpty()) return res.status(422).send(errors);
//     try {
//         let data = await UsuarioQuery.createUsuarios(req.body);
//         res.status(200).send({status: 200,message: "Ok", data})
//     } catch (error) {
//         res.status(500).send({status: 500,message: error.message})        
//     }
// };

// //Delete
// export const deleteUser = async(req,res) =>{
//     try {
//         await UsuarioQuery.deleteUser(req.params._id);
//         res.status(200).send({
//             status:200,
//             message:'Nice!'
//         })
        
//     } catch (error) {
//         res.status(500).send({
//             message:"No se pudo borrar el usuario",
//             error:error.message
//         })
//     }
// }
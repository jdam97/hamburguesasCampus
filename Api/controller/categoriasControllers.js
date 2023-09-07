import * as categoriasQuery from "../services/categorias.js";
import { validationResult } from "express-validator";


//Get All
export const  allCategorias = async (req, res) => {
    try {
        let data = await categoriasQuery.categorias();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//categoriasgourmet
export const  categoriasgourmet = async (req, res) => {
    try {
        let data = await categoriasQuery.categoriasgourmet();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};
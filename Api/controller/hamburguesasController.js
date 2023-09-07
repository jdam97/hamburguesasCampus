import * as HamburguesasQuery from "../services/hamburguesas.js";
import { validationResult } from "express-validator";

//2.Encontrar todas las hamburguesas de la categoría "Vegetariana"
export const  hamburguesasV = async (req, res) => {
    console.log(req.rateLimit);
    try {
        let data = await HamburguesasQuery.hamburguerVegetarian();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  menorIgual = async (req, res) => {
    console.log(req.rateLimit);
    try {
        let data = await HamburguesasQuery.menorigual();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};
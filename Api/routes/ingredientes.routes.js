import { Router } from "express";
import * as ingredientesConsulta from "../controller/ingredientesController.js"
import validacionIngredientes from "../../middleware/ingredientes.js" // acá importo el middleware

const IngredientesApp = Router();

// AutosApp.use(passportHelper.authenticate('bearer', {session: false}));

IngredientesApp.get("/",ingredientesConsulta.getIngredientes); 
IngredientesApp.get("/ingrediente",ingredientesConsulta.hamIngredientes); 
IngredientesApp.get("/clasicos",ingredientesConsulta.iClasico); 
IngredientesApp.post("/",validacionIngredientes,ingredientesConsulta.addIngredientes)



export default IngredientesApp;

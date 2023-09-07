import { Router } from "express";
import * as ingredientesConsulta from "../controller/ingredientesController.js"
// import passportHelper from "../../../helpers/passportLogin.js"
// import validacionAutos from "../../../middleware/Autos.js" // acá importo el middleware

const IngredientesApp = Router();

// AutosApp.use(passportHelper.authenticate('bearer', {session: false}));

IngredientesApp.get("/",ingredientesConsulta.getIngredientes); //punto 1
IngredientesApp.get("/ingrediente",ingredientesConsulta.hamIngredientes); //punto 9


export default IngredientesApp;

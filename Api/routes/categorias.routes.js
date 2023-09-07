import { Router } from "express";
import * as categoriasConsulta from "../controller/categoriasControllers.js"
// import passportHelper from "../../../helpers/passportLogin.js"
// import validacionAutos from "../../../middleware/Autos.js" // acá importo el middleware

const categoriasApp = Router();

// AutosApp.use(passportHelper.authenticate('bearer', {session: false}));

categoriasApp.get("/",categoriasConsulta.allCategorias);


export default categoriasApp;

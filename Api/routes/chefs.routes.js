import { Router } from "express";
import * as chefsConsulta from "../controller/chefsControllers.js"
// import passportHelper from "../../../helpers/passportLogin.js"
// import validacionAutos from "../../../middleware/Autos.js" // acá importo el middleware

const chefsApp = Router();

// AutosApp.use(passportHelper.authenticate('bearer', {session: false}));

chefsApp.get("/",chefsConsulta.chefsCarnes);
chefsApp.get("/hamburguesa",chefsConsulta.hamburguesaChef);



export default chefsApp;

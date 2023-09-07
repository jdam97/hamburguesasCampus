import { Router } from "express";
import * as hamburguesasConsultas from "../controller/hamburguesasController.js";
// import passportHelper from "../../../helpers/passportLogin.js"
// import validarContratos from "../../../middleware/Contratos.js"

const HamburguesasApp = Router();

// ContratosApp.use(passportHelper.authenticate('bearer', {session: false}));

HamburguesasApp.get("/", hamburguesasConsultas.hamburguesasV);
HamburguesasApp.get("/menorIgual", hamburguesasConsultas.menorIgual);


export default HamburguesasApp;
import { Router } from "express";
import * as hamburguesasConsultas from "../controller/hamburguesasController.js";
// import passportHelper from "../../../helpers/passportLogin.js"
// import validarContratos from "../../../middleware/Contratos.js"

const HamburguesasApp = Router();

// ContratosApp.use(passportHelper.authenticate('bearer', {session: false}));

HamburguesasApp.get("/", hamburguesasConsultas.hamburguesasV);




// ContratosApp.get("/:ContratosID", ContratosConsultas.getContratosById);
// ContratosApp.post("/",validarContratos,ContratosConsultas.createContratos);
// ContratosApp.delete("/:_id",ContratosConsultas.deleteContratos);
// ContratosApp.put("/:_id", ContratosConsultas.updateContratos)
export default HamburguesasApp;
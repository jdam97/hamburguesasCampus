import { Router } from "express";
import * as autosConsulta from "../controller/AutosController.js"
import passportHelper from "../../../helpers/passportLogin.js"
import validacionAutos from "../../../middleware/Autos.js" // acá importo el middleware

const AutosApp = Router();

AutosApp.use(passportHelper.authenticate('bearer', {session: false}));

AutosApp.get("/",autosConsulta.getAllAutos);
AutosApp.get("/:autosId",autosConsulta.getAutosById)
AutosApp.post("/",validacionAutos,autosConsulta.createAutos);
AutosApp.delete("/:_id",autosConsulta.deleteAutos);
AutosApp.put("/:_id",autosConsulta.updateAutos)
export default AutosApp;

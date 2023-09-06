import { Router } from "express";
import * as UsuarioConsulta from "../controller/UserController.js";
import passportHelper from "../../../helpers/passportLogin.js"
import validarUsuarios from "../../../middleware/User.js"

const UsuarioApp = Router();

UsuarioApp.use(passportHelper.authenticate('bearer', {session: false}));

UsuarioApp.get("/",UsuarioConsulta.getAllUsuarios);
UsuarioApp.get("/:usuariosID",UsuarioConsulta.getUsuariosById);
UsuarioApp.post("/",validarUsuarios,UsuarioConsulta.createUsuarios);
UsuarioApp.delete("/:_id",UsuarioConsulta.deleteUser)
export default UsuarioApp;
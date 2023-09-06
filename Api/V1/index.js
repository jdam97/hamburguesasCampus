import { Router } from "express";
import UsuarioApp from "./routes/user.routes.js";
import ContratosApp from "./routes/contratos.routes.js";
import AutosApp from "./routes/autos.routes.js"
import { limitRequest } from "../../config/limit.js";
import {appLogin} from "./routes/login.routes.js"

const index = Router();
index.use(limitRequest());

index.use("/login",appLogin)
index.use("/usuarios",UsuarioApp);
index.use("/contratos",ContratosApp);
index.use("/autos",AutosApp);

export default index;
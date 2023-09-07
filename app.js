import dotenv from "dotenv";
import express from "express";
import IngredientesApp from "./Api/routes/ingredientes.routes.js"
import HamburguesasApp from "./Api/routes/hamburguesas.routes.js"
import chefsApp from "./Api/routes/chefs.routes.js"
import categoriasApp from "./Api/routes/categorias.routes.js"
import { limitRequest } from "./config/limit.js";

dotenv.config("../");

const app = express();

app.use(express.json());
app.use(limitRequest());


//Routers
app.use("/ingredientes",IngredientesApp);
app.use("/hamburguesas",HamburguesasApp);
app.use("/chefs",chefsApp);
app.use("/categorias",categoriasApp);





let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const DB = JSON.parse(process.env.ATLAS_CONNECTION);

export async function connectDB(){
    try{
        const URI = `mongodb+srv://latinoamericacampus233:Campus*2023@cluster0.l3dtumk.mongodb.net/filtroMongo_JonathanDavidAlvarez`
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(URI,options);
        console.log("Conectado");
        return client.db();
    } catch(error){
        return {status:500,message:error}
    }
}
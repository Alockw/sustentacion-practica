import { config } from "dotenv"
import express, {json} from "express"
import path from "path"

import { __dirname } from "./util/__dirname.js"
import { connectDatabase } from "./config/database.js"
import artistasRoutes from "./routes/artistasRoutes.js"
import albumesRoutes from "./routes/albumesRoutes.js"
config()

connectDatabase()
    .then(() => {
        console.log("Conexión Base de Datos Exitosa")
    })
    .catch((error) => {
        console.error("Error al conectar a la Base de Datos:", error)
        process.exit(1)
    });

const server = express()
const PORT = process.env.PORT
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.use(json())

server.use(albumesRoutes)
server.use(artistasRoutes)


server.listen(PORT, () => console.log(`Server runinn in port ${PORT}`))
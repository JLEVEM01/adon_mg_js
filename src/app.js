import express from "express"
import { config } from "dotenv"
import env from "env-var"
import usuarioController from "./modules/usuarios/infrastructure/web/usuarioController.js"
// import { errorMiddleare } from "./middlewares/errorMiddlwrares.js"

config()
const PORT = env.get("PORT").required().asInt()

const app = express()
app.use(express.json())

app.get("/api", (req, res)=>{
    res.send("Hello world")
})

app.use("/api", usuarioController)

// app.use(errorMiddleare)

app.listen(PORT)
console.log(`Servidor escuchando en el puero ${PORT}`)
import express from "express"
import usuarioController from "../modules/usuarios/infrastructure/web/usuarioController.js"
import { errorMiddleware } from "../middlewares/errorMiddlwrares.js"

const app = express()
app.use(express.json())

// app.get("/api", (req, res)=>{
//     res.send("Hello world")
// })

app.use("/api", usuarioController)

app.use(errorMiddleware)

export default app
import express from "express"
import { config } from "dotenv"
import env from "env-var"
import app from "./config/server.js"

config()
const PORT = env.get("PORT").required().asInt()


app.listen(PORT)
console.log(`Servidor escuchando en el puero ${PORT}`)
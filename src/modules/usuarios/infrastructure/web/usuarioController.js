
import { Router } from "express";
import { UsuarioRepository } from "../persistence/usuarioRepository.js";
import { UsuarioService } from "../../application/services/usuariosServices.js";

const router = Router()
const usuarioRepository = new UsuarioRepository()
const usuariosServices = new UsuarioService(usuarioRepository)

router.get("/usuarios",  async (req, res) => {

    try {

        const usuarios = await usuariosServices.listarUsuarios()

        res.status(200).json({
            success: true,
            data: usuarios
        })
    }
    catch(error){
        res.status(400).json({
            succesS: false,
            message: error
        })
    }
})

router.post("/usuarios", async(req,res) => {

    console.log(req.body)
    const {nombre, apaterno, amaterno, rfc, nomUsuario, contraseña} = req.body

    try {

        const usuario = await usuariosServices.crearUsuario(nombre, apaterno, amaterno, rfc,nomUsuario, contraseña)

        res.status(200).json({
            success: true,
            message: "El usuario se ha agregado correctamente",
            data: usuario
        })
    }
    catch(error){
        res.status(400).json({
            succces: false,
            message: error.message
        })
    }
})


export default router

import { Router } from "express";
import { UsuarioRepository } from "../persistence/usuarioRepository.js";
import { UsuarioService } from "../../application/services/usuariosServices.js";
import { verificarUsuario} from "../middlewares/verificarUsuario.js"

const router = Router()
const usuarioRepository = new UsuarioRepository()
const usuariosServices = new UsuarioService(usuarioRepository)

router.get("/usuarios", async (req, res, next) => {

    try {

        const usuarios = await usuariosServices.listarUsuarios()

        res.status(200).json({
            success: true,
            data: usuarios
        })
    }
    catch(error){
        next(error)
    }
})

router.post("/usuarios", async(req,res, next) => {

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
        next(error)
    }
})

router.put("/usuarios/:id" , async(req, res, next) => {

    const { id } = req.params
    const { nombre, apaterno, amaterno, rfc , nomUsuario, contraseña  } = req.body

    try {

        const usuario = await usuariosServices.modificarUsuario(parseInt(id),nombre,apaterno, amaterno, rfc, nomUsuario, contraseña)

        res.status(200).json({
            success: true,
            message: "El registro se ha modificado corrrectamente",
            data: usuario
        })
        
    }
    catch(error){
        next(error)
    }

})


router.get("/usuarios/:id", async (req,res, next)=>{

    const { id } = req.params

    try {

        const usuario = await usuariosServices.consultarUsuario(parseInt(id))

        res.status(200).json({
            succesS: true,
            data: usuario
        })
    }
    catch(error){
        next(error)
    }
})

router.delete("/usuarios/:id", async(req,res, next)=> {

    const {id} = req.params

    try {

        await usuariosServices.eliminarUsaurio(parseInt(id))
        
        res.status(200).json({
            succesS: true,
            message: "El usuario se ha eliinado correctamente"
        })
    }
    catch(error){
        next(error)
    }
})

export default router
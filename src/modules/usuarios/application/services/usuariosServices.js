import { Usuario } from "../../domain/usuario.js"
import { hashPassword } from "./security/hasgService.js"

export class UsuarioService{
    constructor(usuarioRepository){
        this.usuarioRepository = usuarioRepository
    }

    async crearUsuario(nombre, apaterno, amaterno, rfc, nomUsuario, contraseña){
        try {

            contraseña =  await hashPassword(contraseña)
            const usuario = await this.usuarioRepository.guardar(new Usuario(null, nombre, apaterno,amaterno,rfc,nomUsuario, contraseña) )

            if(usuario !== null){
                return usuario
            }
        }
        catch(error){
            throw new Error(error)
        }
    }

    async modificarUsuario(id, nombre, apaterno, amaterno, rfc, nomUsuario, contraseña ){
        try{

            const usuario = await this.usuarioRepository.modificar(new Usuario(null, nombre, apaterno, amaterno, rfc, nomUsuario, contraseña), id)

            if(usuario !== null){
                return usuario
            }
        }
        catch(error){
            throw new Error(error)
        }
    }

    async eliminarUsaurio (id){
        try {

            const usuario = await this.usuarioRepository.eliminar(id)
            return true
        }
        catch(erro){
            throw new Error(error)
        }
    }

    async consultarUsuario(id){
        try {

            const usaurio = await this.usuarioRepository.consultar(id)

            if(usaurio !== null){
                return usaurio
            }
        }
        catch(error){
            throw new Error(error)
        }
    }

    async listarUsuarios(){
        try {

            const usuarios = await this.usuarioRepository.listar()
            return usuarios
        }
        catch (error) {
            throw new Error(error)
        }
    }
}
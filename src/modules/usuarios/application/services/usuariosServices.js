import { ApiError } from "../../../../adapters/ApiError.js"
import { Usuario } from "../../domain/usuario.js"
import { hashPassword } from "./security/hasgService.js"

export class UsuarioService{
    constructor(usuarioRepository){
        this.usuarioRepository = usuarioRepository
    }

    async listarUsuarios(){
        try {

            const usuarios = await this.usuarioRepository.listar()
            return usuarios
        }
        catch (error) {
            throw error
        }
    }

    async crearUsuario(nombre, apaterno, amaterno, rfc, nomUsuario, contraseña){
        try {

            contraseña =  await hashPassword(contraseña)

            const usuario = await this.usuarioRepository.guardar(new Usuario(null, nombre, apaterno,amaterno,rfc,nomUsuario, contraseña) )

            return usuario
        }
        catch(error){
            throw error
        }
    }

    async modificarUsuario(id, nombre, apaterno, amaterno, rfc, nomUsuario, contraseña ){
        try{

            // await this.usuarioRepository.consultar_nomUsuario(nomUsuario)
            const usuario = await this.usuarioRepository.modificar(new Usuario(null, nombre, apaterno, amaterno, rfc, nomUsuario, contraseña), id)

            return usuario
        }
        catch(error){
            throw error
        }
    }

    async eliminarUsaurio (id){
        try {

            await this.usuarioRepository.eliminar(id)

        }
        catch(erro){
            throw erro
        }
    }

    async consultarUsuario(id){
        try {

            const usaurio = await this.usuarioRepository.consultar(id)
            return usaurio
        }
        catch(error){
            throw error
        }
    }

}
import { prisma } from "../../../../client/prisma.js"
export class UsuarioRepository{

    async guardar(Usuario){

        try 
        {
            const nuevo_usuario = await prisma.usuario.create({
                data: {
                    Nombre: Usuario.Nombre.value,
                    APaterno: Usuario.APaterno.value,
                    AMaterno: Usuario.AMaterno.value,
                    RFC: Usuario.RFC.value,
                    NomUsuario: Usuario.NomUsuario.value,
                    Contraseña: Usuario.Contraseña
                }
            })

            if(nuevo_usuario !== null){
                return nuevo_usuario
            }
        }
        catch(error){
            throw new Error(error)
        }
    }

    async modificar(Usuario){

        try {

            const usuario_modificado = await prisma.usuario.update({
                where: {
                    IdUsuario: Usuario.IdUsuario
                },
                data: {
                    Nombre: Usuario.Nombre,
                    APaterno: Usuario.APaterno,
                    AMaterno: Usuario.AMaterno,
                    RFC: Usuario.RFC,
                    NomUsuario: Usuario.NomUsuario,
                    Contraseña: Usuario.Contraseña
                }
            })

            if(usuario_modificado !== null){
                return usuario_modificado
            }
        }
        catch(error){
            throw new Error(error)
        }
    }

    async eliminar(Id){

        try {
            const usaurio_eliminado = await prisma.usuario.delete({
                where: {
                    IdUsuario: Id
                }
            })
            return true

        }
        catch(error){
            throw new Error(error)
        }
    }

    async consultar(Id){
        try {
            const usuario = await prisma.uSUARIO.findFirst({
                where: {
                    IdUsuario: Id
                }
            })

            if(usuario !== null){
                return usuario
            }
        }
        catch(error){
            throw new Error(error)
        }
    }

    async listar(){

        try {
            const usuarios = await prisma.usuario.findMany()
            return usuarios
        }
        catch(error){
            throw new Error(error)
        }
    }
}
import { prisma } from "../../../../client/prisma.js"
import { ApiError } from "../../../../adapters/ApiError.js"

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

            if(nuevo_usuario === null){
                throw new ApiError("No se ha podido crear el usuario correctamente",400)
            }
            return nuevo_usuario

        }
        catch(error){
            throw new ApiError(error.message, 500)
        }
    }

    async modificar(Usuario, id){

        try {

            const usuario_modificado = await prisma.usuario.update({
                where: {
                    IdUsuario: id
                },
                data: {
                    Nombre: Usuario.Nombre.value,
                    APaterno: Usuario.APaterno.value,
                    AMaterno: Usuario.AMaterno.value,
                    RFC: Usuario.RFC.value,
                    NomUsuario: Usuario.NomUsuario.value,
                    Contraseña: Usuario.Contraseña.value
                }
            })


            /*-- Si el resgistro no es cecnotrado de acuerdo al ID no devuelve un obejto null, pasa el error idrectamente 
            al catch(erro)
            Meensaje:  "\nInvalid `prisma.usuario.update()` invocation:\n\n\nAn operation failed because it depends on one or more records that were required but not found. Record to update not found."*/
            
            //------------------------------------
            // if(usuario_modificado === null){
            //     throw new ApiError("El registro no existe dentro de labasde de datos", 404)
            // }
            //------------------------------------

            return usuario_modificado
        }
        catch(error){
            throw new ApiError(error.message, 500)
        }
    }

    async eliminar(Id){

        try {
            await prisma.usuario.delete({
                where: {
                    IdUsuario: Id
                }
            })
            return true
        }
        catch(error){
            throw new ApiError(error.message, 500)
        }
    }

    async consultar(Id){
        try {
            const usuario = await prisma.usuario.findFirst({
                where: {
                    IdUsuario: Id
                }
            })

            if(usuario === null){
                throw new ApiError("El usuario no ha sido encontrado",404)
            }

            return usuario
        }
        catch(error){
            throw new ApiError(error.message, 500)
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
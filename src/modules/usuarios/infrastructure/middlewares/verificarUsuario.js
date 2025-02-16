import { prisma } from "../../../../client/prisma.js"
import { ApiError } from "../../../../adapters/ApiError.js"

export const verificarUsuario = async (req, res, next) => {

    const { nomUsuario } = req.body

    try {

        const usuario = await prisma.usuario.findFirst({
            where: {
                NomUsuario: nomUsuario
            }
        })

        if (usuario !== null){
            throw new ApiError(`Ya existe un registro con el nombre de usuario: ${nomUsuario}`,409)
        }
        next()
    }
    catch(error){
        next(error)
    }
}



// export const verificarUsuario = async(req, res) => {

//     const { id } = req.params
//     const { nomUsuario } = req.body
    
//     try {

//         const usuario = await prisma.usuario.findFirst({
//             where: {
//                 AND: [
//                     {IdUsuario : id},
//                     {NomUsuario: nomUsuario}
//                 ]
//             }
//         })

//         if(usuario !== null){
//             next()
//         }

//         throw new ApiError("El nombre de usuario ya esta asociado a otro registro", 409)
//     }
//     catch(error){
//         next(error)
//     }
// }

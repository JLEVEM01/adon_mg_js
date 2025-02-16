import { ApiError } from "../../../../adapters/ApiError.js"

export class IdUsuario {
    constructor(value){
        this.value = value
        this.varificarIdUsuario()
    }

    varificarIdUsuario(){
        if(this.value !== null){
            // throw new Error("")
            throw new ApiError("El IdUsaurio no puede ser asignado, necesita ser un parametro null",400)
        }
    }
}
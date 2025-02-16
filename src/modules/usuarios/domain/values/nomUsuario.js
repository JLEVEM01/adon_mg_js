
import { ApiError } from "../../../../adapters/ApiError.js"


export class NomUsuario{
    constructor(value){
        this.value = value
        this.varificarNomUsuario()
    }

    varificarNomUsuario(){
        if(this.value.length < 5) {
            // throw new Error("El nombre de usuario no debe ser menor a 5 caracteres")
            throw new ApiError("El nombre de usuario no debe ser menor a 5 caracteres")
        }
        else if(this.value.includes(' ')){
            // throw new Error("El nombre de usuario no debe contener espaciados en blanco")
            throw new ApiError("El nombre de usuario no debe ser menor a 5 caracteres",400)
        }
    }
}
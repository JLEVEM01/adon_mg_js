
import { ApiError } from "../../../../adapters/ApiError.js"

export class APaterno{
    constructor(value){
        this.value = value
        this.verificarAPaterno()
    }

    verificarAPaterno(){
        if(this.value.length < 2){
            throw new ApiError("El apellido parterno no deber ser menos a 2 caracteres",400)
        }
    }
}
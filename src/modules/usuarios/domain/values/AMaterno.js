import { ApiError } from "../../../../adapters/ApiError.js"


export class AMaterno{
    constructor(value){
        this.value = value
        this.verificarAMaterno()
    }

    verificarAMaterno(){
        if(this.value.length < 2){
            throw new ApiError('El apellido materno no deber ser menos a 2 caracteres',400)
        }
    }
}
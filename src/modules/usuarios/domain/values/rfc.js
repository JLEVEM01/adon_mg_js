
import { ApiError } from "../../../../adapters/ApiError.js"

export class RFC{
    constructor(value){
        this.value = value
        this.verificarRFC()
    }

    verificarRFC(){
        if(this.value.length < 12 ){
            throw new ApiError("El rfc no debe contener menos de 12 caracteres",400)
        }

    }
}
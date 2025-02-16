import { ApiError } from "../../../../adapters/ApiError.js"

export class Nombre {
    constructor(value){
        this.value = value
        this.verificarNombre()
    }

    verificarNombre(){
        if(this.value.length < 2){
            // throw new Error("El nombre no puede ser menos a 2 caracteres")
            throw new ApiError("El nombre no puede ser menos a 2 caracteres",400)
        }
    }
}
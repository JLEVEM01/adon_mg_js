import { ApiError } from "../../../../adapters/ApiError.js"

export class RFC{
    constructor(value){
        this.value = value
        this.verificarRFC()
    }

    verificarRFC(){
        if(this.value.length < 12 ){
            throw ApiError.badRequet("El rfc no debe contener menos de 12 caracteres")
        }
        // else if(this.value !== this.value.toUpperCase){
        //     throw ApiError.badRequet("El RFC no cuenta con una estructura valida")
        // }
    }
}
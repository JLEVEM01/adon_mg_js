
export class APaterno{
    constructor(value){
        this.value = value
        this.verificarAPaterno()
    }

    verificarAPaterno(){
        if(this.value.length < 2){
            throw new Error("El apellido parterno no deber ser menos a 2 caracteres")
        }
    }
}
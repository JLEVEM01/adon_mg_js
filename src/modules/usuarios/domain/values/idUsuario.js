

export class IdUsuario {
    constructor(value){
        this.value = value
        this.varificarIdUsuario()
    }

    varificarIdUsuario(){
        if(this.value !== null){
            throw new Error("El IdUsaurio no puede ser asignado, necesita ser un parametro null")
        }
    }
}
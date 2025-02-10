

export class Contraseña{
    constructor(value){
        this.value = value
        this.verificarContraseña()
    }

    verificarContraseña(){
        if(/[A-Z]/.test(this.value) && /\d/.test(this.value) && /[!@#$%^&*(),.?":{}|<>]/.test(this.value)){
            throw new Error("La contraseña debe contener al menos una letra en mayuscar, un numero y un caracter especial")
        }
    }
}
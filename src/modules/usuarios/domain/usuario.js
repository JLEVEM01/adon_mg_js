import { Nombre } from "./values/nombre.js"
import { AMaterno } from "./values/AMaterno.js"
import { APaterno } from "./values/apaterno.js"
import { NomUsuario } from "./values/nomUsuario.js"
import { Contraseña } from "./values/contraseña.js"
import { RFC } from "./values/rfc.js"
import { IdUsuario } from "./values/idUsuario.js"

export class Usuario {

    constructor(idUsuario, nombre, apaterno, amaterno, rfc, nomUsuario, contraseña) {
        this.IdUsuario = new IdUsuario(idUsuario)
        this.Nombre = new Nombre(nombre)
        this.APaterno = new APaterno(apaterno)
        this.AMaterno = new AMaterno(amaterno)
        this.RFC = new RFC(rfc)
        this.NomUsuario = new NomUsuario(nomUsuario)
        this.Contraseña = contraseña
    }
}
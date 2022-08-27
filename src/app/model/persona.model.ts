export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    imagen: String;

    constructor (nombre: String, apellido: String, imagen:String){
        this.apellido = apellido;
        this.nombre = nombre;
        this.imagen = imagen;
    }

}


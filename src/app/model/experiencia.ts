export class Experiencia {
    id?:number;
    nombreExperiencia:string;
    descripcionExperiencia:string;

   constructor(nombre: string, descripcion: string){
    this.nombreExperiencia = nombre;
    this.descripcionExperiencia = descripcion;
   }

}

export class Experiencia {
    id? : number;
    nombreEL : string;
    descripcionEL : string;

    constructor(nombreEL: string, descripcionEL: string){
        this.nombreEL = nombreEL;
        this.descripcionEL = descripcionEL;
    }
}

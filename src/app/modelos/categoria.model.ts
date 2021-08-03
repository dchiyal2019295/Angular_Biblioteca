export class Categoria{
    constructor(
        public _id: String,
        public nombre: String,
        public informacion: [{
            descripcion: String,
            imagen: String;
        }]
    ){}
}

export class producto {
    cod: string;
    descripcion: string;
    precioU: number;



    constructor(cod: string, descripcion: string,
        precioU: number) {
      this.cod = cod;
      this.descripcion = descripcion;
      this.precioU = precioU;
    }
   
    mostrar() {
      return this.cod + " : " + this.descripcion;
    }
  }
   
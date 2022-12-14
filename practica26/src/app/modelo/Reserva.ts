export class Reserva {
nombre: String | undefined ; 
ciudad:String | undefined;
pais:String | undefined;
entrada:String | undefined;
salida:String | undefined;
  
    constructor(nombre:String,
        ciudad:String,
        pais:String,
        entrada:String,
        salida:String) {  
            
        this.nombre=nombre;   
        this.ciudad=ciudad;
        this.pais=pais;
        this.entrada=entrada;
        this.salida=salida; 
    }
  }
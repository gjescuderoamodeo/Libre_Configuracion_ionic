import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiServiceProvider {

    private URL = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/41091?api_key=";
    private ApiKey = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJndWlsbGVybW9qb3NlLmVzY3VkZXJvLmFtb2Rlby5hbHVAaWVzanVsaW92ZXJuZS5lcyIsImp0aSI6IjM5NjQwY2U1LTUyZjQtNDViOC1iMTkyLTRlNTk5ODBlM2UyMSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjczMjUxNDE3LCJ1c2VySWQiOiIzOTY0MGNlNS01MmY0LTQ1YjgtYjE5Mi00ZTU5OTgwZTNlMjEiLCJyb2xlIjoiIn0.vOrJJQ7W5EzHd6lM8VkDdYfDBaLXzOytja3QnjJsw7c"
    private datos = ""
    private datos2=[]

    constructor(public http: HttpClient) {
    }

    /*
    Este método devuelve un objeto 'Promise'.
    Esto es un elemento asíncrono que puede finalizar de dos formas: correctamente, en cuyo caso sale con resolve, o bien de forma incorrecta, acabando en ese caso con reject.
    El método llama al método get del atributo http, pasándole como parámetro la url que devuelve la colección alumnos de la Api.
    Lo que devuelve este método lo convertimos a Promise, para luego evaluar su resultado mediante then y catch.
    Si el acceso a la Api ha ido bien el código que se ejecuta es el ubicado en la cláusula then. Si ha ido mal se ejecuta el código ubicado en la cláusula catch.
    Si todo ha ido bien convertimos el array de objetos Json que nos llega a un array de objetos alumnos, y lo devolvemos con resolve.
    Si el acceso ha ido mal devolvemos el mensaje de error que no llega mediante reject.
    */

    getTiempo(): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            this.http.get(this.URL+this.ApiKey).toPromise()
                .then((data: any) => {
                    this.datos = data.datos;
                    //console.log(data)
                    //this.getTiempo2();
                    resolve(this.datos);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getTiempo

    getTiempo2(datos:any): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            this.http.get(datos).toPromise()
                .then((data: any) => {
                    //this.datos = data.datos;
                    //console.log(data)
                    //this.datos2=data;
                    //return(data);
                    resolve(data);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getTiempo

    
}//end_class


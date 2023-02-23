import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro, Usuario } from 'src/app/modelo/Interfaces';


@Injectable()
export class ApiServiceProvider {

    private URL = "http://localhost:3000";

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

    getUsuario(id: number) {
        let promise = new Promise<Usuario[]>((resolve, reject) => {
            this.http.get(this.URL + "/usuarios?id=" + id).toPromise()
                .then((data: any) => {
                    let usuarios = new Array<Usuario>();
                    data.forEach((usuario: Usuario) => {
                        //console.log(usuarios);
                        usuarios.push(usuario);
                    });
                    resolve(usuarios);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getAlumnos

    getUsuario2(id: number) {
        let usuarios:Usuario;
        let promise = new Promise<Usuario>((resolve, reject) => {
            this.http.get(this.URL + "/usuarios?id=" + id).toPromise()
                .then((data: any) => {
                    data.forEach((usuario: Usuario) => {
                        usuarios=usuario;
                    });
                    resolve(usuarios);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise; //????????
    }//end_getAlumnos

    getUsuariosConPrestamos() {
        let usuariosPrestamos= new Array<Usuario>();
        let libros = new Array<Libro>();

        //primero consultas libros
        let promise = new Promise<Usuario[]>((resolve, reject) => {
            this.http.get(this.URL + "/libros").toPromise()
                .then((data: any) => {
                    data.forEach((libro: Libro) => {
                        //console.log(libro.idUsuarioPrestamo)
                        if (libro.idUsuarioPrestamo != undefined) {
                            //obtengo usuario por id usuarioPrestamo
                            let user = this.getUsuario(libro.idUsuarioPrestamo) 
                            .then((datos: Usuario[]) => {
                                //console.log(datos[0])  
                                if (!usuariosPrestamos.includes(datos[0])) {
                                    usuariosPrestamos.push(datos[0]);
                                }
                              })
                              .catch((error: string) => {
                                console.log(error);
                              });                      
                            /*if (!usuariosPrestamos.includes(user)) {
                                usuariosPrestamos.push(user);
                            }*/
                        }
                        libros.push(libro);
                    });
                    resolve(usuariosPrestamos);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });


        //ahora consultas idUsuario de los libros
        /*libros.forEach(element => {

            if (element.idUsuarioPrestamo != undefined) {
                this.getUsuario(element.idUsuarioPrestamo)
                .then((data: any) => {
                    data.forEach((usuario: Usuario) => {                        
                        if(!usuariosPrestamos.find(usuario)){
                            usuariosPrestamos.push(usuario);
                        }                       
                    });
                })
            }
        });*/


        return usuariosPrestamos;
    }//end_getAlumnos

    getLibrobyUsuario(id: number) {
        let promise = new Promise<Libro[]>((resolve, reject) => {
            this.http.get(this.URL + "/libros?idUsuarioPrestamo=" + id).toPromise()
                .then((data: any) => {
                    let libros = new Array<Libro>();
                    data.forEach((libro: Libro) => {
                        //console.log(usuarios);
                        libros.push(libro);
                    });
                    resolve(libros);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getAlumnos

    getLibros() {
        let promise = new Promise<Libro[]>((resolve, reject) => {
            this.http.get(this.URL + "/libros").toPromise()
                .then((data: any) => {
                    let libros = new Array<Libro>();
                    data.forEach((libro: Libro) => {
                        //console.log(usuarios);
                        libros.push(libro);
                    });
                    resolve(libros);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getAlumnos

    devolverLibro(nuevosDatosLibro: Libro): Promise<Libro> {
        let promise = new Promise<Libro>((resolve, reject) => {
            var header = { "headers": { "Content-Type": "application/json" } };
            let datos = JSON.stringify(nuevosDatosLibro);
            this.http.put(this.URL + "/libros/" + nuevosDatosLibro.id,
                datos,
                header).toPromise().then(
                    (data: any) => { // Success
                        let libro: Libro;
                        libro = data;
                        resolve(libro);
                    }
                )
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_devolverLibro

}//end_class
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo, Alumno } from 'src/app/modelo/interfaces';

@Injectable()
export class ApiServiceProvider {

    private URL = "http://localhost:3000";    


    constructor(public http: HttpClient) {
    }


    getGrupos(): Promise<Grupo[]> {
        let promise = new Promise<Grupo[]>((resolve, reject) => {
            this.http.get(this.URL + "/grupos").toPromise()
                .then((data: any) => {
                    let grupos = new Array<Grupo>();
                    data.forEach((grupo: Grupo) => {
                        console.log(grupo);
                        grupos.push(grupo);
                    });
                    resolve(grupos);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getAlumnos

    getAlumnosIdGrupo(idGrupo:number): Promise<Alumno[]> {
        let promise = new Promise<Alumno[]>((resolve, reject) => {
            this.http.get(this.URL + "/alumnos/").toPromise()
                .then((data: any) => {
                    let alumnos = new Array<Alumno>();
                    data.forEach((alumno: Alumno) => {
                        console.log(alumno);
                        alumnos.push(alumno);
                    });
                    resolve(alumnos);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getAlumnos


    getAlumnos(): Promise<Alumno[]> {
        let promise = new Promise<Alumno[]>((resolve, reject) => {
            this.http.get(this.URL + "/alumnos").toPromise()
                .then((data: any) => {
                    let alumnos = new Array<Alumno>();
                    data.forEach((alumno: Alumno) => {
                        console.log(alumno);
                        alumnos.push(alumno);
                    });
                    resolve(alumnos);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getAlumnos


}//end_class
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceMunicipio, InterfacePrevisionDiariaMunicipio } from 'src/app/modelo/Interfaces';

@Injectable()
export class ApiServiceProvider {

    private URL = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/";
    private API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZWRyb2JsYW5jaEBpZXNqdWxpb3Zlcm5lLmVzIiwianRpIjoiYzdhY2YyMDYtNGUxNy00YzllLTk4YjQtNTkwMzdmYjMwMzI1IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2NzMyNTE0MjEsInVzZXJJZCI6ImM3YWNmMjA2LTRlMTctNGM5ZS05OGI0LTU5MDM3ZmIzMDMyNSIsInJvbGUiOiIifQ.dgCFYzsR_U1jRZ1y-JKD9EjIsPMa2tyrKoQZFp_64z0";


    constructor(public http: HttpClient) {
    }


    getPrevisionDiariaMunicipio(municipio:string): Promise<InterfacePrevisionDiariaMunicipio[]> {
        let promise = new Promise<any>((resolve, reject) => {
            this.http.get(this.URL + municipio + "/?api_key="+this.API_KEY).toPromise()
                .then((data: any) => {
                    //console.log(data['datos']);
                    this.http.get(data['datos']).toPromise()
                    .then((data:any)=>{
                        resolve(data);
                    })
                    .catch((error: Error) => {
                        reject(error.message);
                    })
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getPrevisionDiariaMunicipio

    getMunicipios(): Promise<any>{
        let promise = new Promise<InterfaceMunicipio[]>((resolve, reject) => {
            this.http.get('./assets/json/municipios.json').toPromise()
            .then((data: any) => {
                resolve(data);
            })
            .catch((error: Error) => {
                reject(error.message);
            })
            });
        return promise;
    }


}//end_class
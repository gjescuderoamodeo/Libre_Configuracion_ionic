import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente, Factura } from 'src/app/modelo/Interfaces';

@Injectable()
export class ApiServiceProvider {

    private URL = "http://localhost:3000";    


    constructor(public http: HttpClient) {
    }


    getFacturas(): Promise<Factura[]> {
        let promise = new Promise<Factura[]>((resolve, reject) => {
            this.http.get(this.URL + "/facturas").toPromise()
                .then((data: any) => {
                    let facturas = new Array<Factura>();
                    data.forEach((factura: Factura) => {
                        //console.log(factura);
                        facturas.push(factura);
                    });
                    resolve(facturas);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getFacturas

    getClientes(): Promise<Cliente[]> {
        let promise = new Promise<Cliente[]>((resolve, reject) => {
            this.http.get(this.URL + "/clientes?_sort=cliente&_order=asc").toPromise()
                .then((data: any) => {
                    let clientes = new Array<Factura>();
                    data.forEach((cliente: Factura) => {
                        //console.log(factura);
                        clientes.push(cliente);
                    });
                    resolve(clientes);
                })
                .catch((error: Error) => {
                    reject(error.message);
                });
        });
        return promise;
    }//end_getClientes

    


}//end_class
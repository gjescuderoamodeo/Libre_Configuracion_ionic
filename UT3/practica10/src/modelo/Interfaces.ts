export interface Producto {
        descripcion: string;
        importeUnitario: number;
        unidades: number;
    }
    
    export interface Factura {
        id: number;
        cliente: string;
        porcentajeIva: number;
        productos: Producto[];
    }
    
    export interface Cliente {
        id: number;
        cliente: string;
    }
    
    export interface Producto {
        id: number;
        descripcion: string;
        importeUnitario: number;
    }
    
    export interface Interfaces {
        facturas: Factura[];
        clientes: Cliente[];
        productos: Producto[];
    }
    
    
export interface Usuario {
    id: number;
    apellidos: string;
    nombre: string;
}

export interface Libro {
    id: number;
    titulo: string;
    fechaPrestamo: string;
    diasPrestamo?: number;
    idUsuarioPrestamo?: number;
}

export interface Interfaces {
    usuarios: Usuario[];
    libros: Libro[];
}


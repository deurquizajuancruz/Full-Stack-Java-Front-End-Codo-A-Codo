class Articulo {
    titulo:string;
    autor:string;
    precio:number;
}


class Buscador {
    claveBusqueda: string;
    articulos: Articulo[];

    buscar(): void {
        console.log(`Buscando con la clave... ${this.claveBusqueda}`);
    }
}

interface Producto {
    id:number;
    nombre:string;

}

function comprar(prod:Producto): void {
    
}

const p: Producto = {
    id:1,
    nombre:'Gerardo'
} 
comprar(p);
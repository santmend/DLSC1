export interface Product {
    
  idProducto: string,
  idCategoria: string,
  nombre: string,
  precio: string
}

export interface Categoria {
  
  idCategoria: string;
  codigo: string,
  nombre: string;
  estado: boolean;
}

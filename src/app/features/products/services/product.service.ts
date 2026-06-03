import { Injectable } from '@angular/core';
import { Producto } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private listaProductos: Producto[] = [];

  constructor() { }

  obtenerProductos(): Producto[] {
    return this.listaProductos;
  }

  crearProducto(nombre: string, precio: number): void {
    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: nombre,
      precio: precio
    }
    this.listaProductos.push(nuevoProducto);
  }

  eliminarProducto(id: number): void {
    this.listaProductos = this.listaProductos.filter(producto => producto.id !== id);
  }
}

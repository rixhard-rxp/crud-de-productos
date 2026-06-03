import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(private productService: ProductService) {}

  get productos(): Producto[] {
    return this.productService.obtenerProductos();
  }

  eliminar(id: number): void {
    this.productService.eliminarProducto(id);
  }
}

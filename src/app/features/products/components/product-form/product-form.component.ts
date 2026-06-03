import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  nombreProducto: string = '';
  precioProducto: number | null = null;
  
  constructor(private productService: ProductService) {}

  guardarProducto(): void {
    
    if (this.nombreProducto.trim() !== '' && this.precioProducto !== null && this.precioProducto > 0) {

      this.productService.crearProducto(this.nombreProducto, this.precioProducto);

      this.nombreProducto = '';
      this.precioProducto = null;

      alert('Producto Agregado con Éxito..!');
    } else {
      alert('Nono, Los valores deben ser válidos honey');
    }
  }
}

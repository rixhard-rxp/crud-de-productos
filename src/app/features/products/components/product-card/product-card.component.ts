import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../product.model'; 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() producto!: Producto;

  @Output() alEliminar = new EventEmitter<number>();

  notificarAlEliminar(): void {
    this.alEliminar.emit(this.producto.id);
  }
}
